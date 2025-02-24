import pino, {Logger} from 'pino';

export const logger  = pino({
   transport : {
       target : 'pino-pretty'
   }
});