import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({ title: 'Get all subscriptions' });
});
subscriptionRouter.get('/:id', (req, res) => {
    res.send({ title: 'Get subscription by ID' });
});
subscriptionRouter.post('/', (req, res) => {
    res.send({ title: 'Create subscription' });
});
subscriptionRouter.put('/:id', (req, res) => {
    res.send({ title: 'Update the subscription' });
});
subscriptionRouter.delete('/:id', (req, res) => {
    res.send({ title: 'Delete the subscription' });
});
subscriptionRouter.get('/user/:id', (req, res) => {
    res.send({ title: 'Get all the user subscriptions' });
});
subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({ title: 'Cancel the subscription' });
});
subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({ title: 'Get upcoming renewals' });
});

export default subscriptionRouter;
