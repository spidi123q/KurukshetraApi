//@ts-ignore
import  winston from 'winston';

/** Logger object */
export let logger = winston.createLogger({
  transports: [
    new (winston.transports.File)({
      filename: 'server-error.log'
    }),
    new winston.transports.Console()
  ]
});
