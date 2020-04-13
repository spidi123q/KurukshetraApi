import winston from "winston";

winston.format.combine(winston.format.colorize(), winston.format.json());

/** Logger object */
export const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: "server-error.log"
    }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ]
});
