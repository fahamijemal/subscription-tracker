import {createRequire} from 'module';
const require = createRequire(import.meta.url);
import dayjs from 'dayjs';
const {serve}= require('@upstash/workflow/express');
import Subscription from '../models/subscription.model.js';

const REMINDERS=[7,5,2,1];

export const sendReminders = serve(async (context) =>{
    const {subscriptionId} = context.requestPayload;
    const subscription=await fetchSubscription(context,subscriptionId);

    if(!subscription || subscription.status !== 'active') return;

    const renewalDate= dayjs(subscription.renewalDate);
    if(renewalDate.isBefore(dayjs())) {
        console.log(`Renewal date has passed for subscription ${subscriptionId}.Stopping workflow.`);
        return;
    }
    for(const daysBefore of REMINDERS) {
        const reminderDate = renewalDate.subtract(daysBefore, 'day');
        if(reminderDate.isAfter()){
            await sleepUntilReminder(context, `Remminder ${daysBefore} days before`, reminderDate);
        }
        await triggerReminder(context, `Remminder ${daysBefore} days before`);

    }
});

const fetchSubscription = async (context, subscriptionId) => {
    return await context.run('get subscription', () =>{
        return Subscription.findById(subscriptionId).populate('user', 'name email');
    })
}

const sleepUntilReminder = async (context,label ,date) =>{
    console.log(`Sleeping until ${date}`);
    await context.sleepUntil(date.toDate());
}

const triggerReminder = async(context,label) => {
    return await context.run(label, () =>{
        console.log(`Triggering reminder: ${label}`);
        // send email or notification logic here
    })
}