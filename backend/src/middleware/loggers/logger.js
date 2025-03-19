import {format} from 'date-fns';
import {v4 as uuid} from 'uuid';
import {existsSync} from 'fs';
import { appendFile, mkdir } from 'fs';
import {dirname, join} from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const logEvents = async (message, logFileName) => {
  const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss');

  // Generic log template
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

  const logPath = join(__dirname, '../../../', 'logs');

  try {
    if (!existsSync(logPath)) {
      mkdir(logPath, (err) =>{
        if (err) {
          console.error('Error creating directory:', err);
        } else {
          console.log('Directory created successfully');
        }
      }
      );
    }

    appendFile(join(logPath, logFileName), logItem, (err) => {
      if (err) {
        console.error('Error appending to file:', err);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'requests.log');
  console.log(`${req.method} ${req.path}`);
  next();
};
