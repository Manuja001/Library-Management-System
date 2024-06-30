import pino from "pino";
import PinoPretty from "pino-pretty";

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      prettyPrint: {
        levelFirst: true,
        colorize: true,
        translateTime: `SYS:standard`,
        ignore: "pid,hostname",
      },
    },
  },
});

export default logger;
