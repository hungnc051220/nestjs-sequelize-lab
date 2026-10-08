import { ConsoleLogger, Injectable } from '@nestjs/common';
import fs from 'fs';
import path from 'path';
import url from 'url';

@Injectable()
export class LoggerService extends ConsoleLogger {
  async logToFile(entry: string) {
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const formattedEntry = `${Intl.DateTimeFormat('en-US', {
      dateStyle: 'short',
      timeStyle: 'short',
      timeZone: 'America/Chicago',
    }).format(new Date())}\t${entry}\n`;

    try {
      if (!fs.existsSync(path.join(__dirname, '..', '..', 'logs'))) {
        await fs.promises.mkdir(path.join(__dirname, '..', '..', 'logs'));
      }

      await fs.promises.appendFile(
        path.join(__dirname, '..', '..', 'logs', 'log.txt'),
        formattedEntry,
      );
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  }

  log(message: any, context?: string) {
    const formattedMessage =
      typeof message === 'string' ? message : JSON.stringify(message);
    const entry = `${context}\t${formattedMessage}`;
    this.logToFile(entry);
    super.log(message, context);
  }

  error(message: any, stackOrContext?: any) {
    const formattedMessage =
      typeof message === 'string' ? message : JSON.stringify(message);
    const entry = `${stackOrContext}\t${formattedMessage}`;
    this.logToFile(entry);
    super.error(message, stackOrContext);
  }
}
