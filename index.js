const Logger = require('./logger.js');

const logger = new Logger(
  __filename,
  (log) => `${new Date().toLocaleTimeString()}: ${log}`
);

logger.log('app started');

require('./templates/login.js')();
require('./middleware/auth.js')();
