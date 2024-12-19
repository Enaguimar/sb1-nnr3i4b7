const logLevels = ['info', 'warn', 'error'] as const;

type LogLevel = typeof logLevels[number];

class Logger {
  private getTimestamp(): string {
    return new Date().toISOString();
  }

  private log(level: LogLevel, message: string, meta?: any): void {
    const timestamp = this.getTimestamp();
    const logMessage = meta 
      ? `[${timestamp}] [${level.toUpperCase()}] ${message} ${JSON.stringify(meta)}`
      : `[${timestamp}] [${level.toUpperCase()}] ${message}`;

    console[level](logMessage);
  }

  info(message: string, meta?: any): void {
    this.log('info', message, meta);
  }

  warn(message: string, meta?: any): void {
    this.log('warn', message, meta);
  }

  error(message: string, meta?: any): void {
    this.log('error', message, meta);
  }
}

export const logger = new Logger();