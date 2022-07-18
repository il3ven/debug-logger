# debug-logger

This is a small 1 hour assignment to test JavaScript skills.

debug-logger is a logger. It allows you to filter logs using a environment variable.

## Example

```js
const Logger = require('./logger.js')

const logger1 = new Logger('unique-id-1')
const logger2 = new Logger('unique-id-2')
const logger2 = new Logger('id-is-unique')

logger1.log('logging using logger 1')
logger2.log('logging using logger 2')
logger3.log('logging using logger 3')
```

### Using the `DEBUG` environment variable we can toggle logs

DEBUG can be a **string** or **regular expression**.

1. #### Output for `DEBUG=unique-id-1 node .`

   Since DEBUG was set to unique-id-1, only logger1 will log.

   ```
   logging using logger 1
   ```

1. #### Output for `DEBUG=unique-id.* node .`

    Since DEBUG was set to unique-id.*, the regular expression matches logger 1 and logger 2. Hence, the logger1 and logger2 logs are printed.
    
    ```
    logging using logger 1
    logging using logger 2
    ```

## API

 * `new Logger(id, transformFunction)` - Creates a new logger.
   * id: The id of the logger used to toggle logs.
   * transformFunction: A function that transforms the log message.
 * `Logger.log(message1, message2, ....)` - Logs the given message.