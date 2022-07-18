const Logger = require('../logger');

const logger = new Logger(
  __filename,
  (log) => `${new Date().toLocaleTimeString()}: ${log}`
);

module.exports = function () {
  logger.log('This is a log inside', __filename);
};
