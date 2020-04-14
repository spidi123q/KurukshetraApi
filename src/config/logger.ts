import winston from "winston";

/** Logger object */
export const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: "server-error.log"
    }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      )
    })
  ]
});
