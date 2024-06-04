const pino = require("pino");

//create a transport
const transport = pino.transport({
  targets: [
    {
      target: "pino-pretty",
      options: {
        destination: "./logs/output.log",
        mkdir: true,
        colorize: false,
      },
    },
    {
      target: "pino-pretty",
      options: { destination: process.stdout.fd },
    },
  ],
});

//create logger instance
const logger = pino(
  {
    level: process.env.PINO_LOG_LEVEL || "error",
  },
  transport
);

module.exports = { logger };
