import {CLient as WorflowClient} from '@upstash/workflow';
import { QSTASH_TOKEN, QSTASH_URL } from './env';

export const workflowClient = new WorflowClient({
    baseUrl: QSTASH_URL,
    token: QSTASH_TOKEN,
});
