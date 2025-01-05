import dotenv from 'dotenv';
import bunyan from 'bunyan';

dotenv.config({});

class Config {
  public JWT_TOKEN: string | undefined;
  public NODE_ENV: string | undefined;
  public SECRET_KEY_ONE: string | undefined;
  public SECRET_KEY_TWO: string | undefined;
  public CLIENT_URL: string | undefined;
  public EC2_URL: string | undefined;
  public PORT: string | number;
  public AWS_REGION:string |undefined
  public AWS_ACCESS_KEY_ID:string |undefined
  public AWS_SECRET_ACCESS_KEY:string |undefined

  constructor() {
    this.JWT_TOKEN = process.env.JWT_TOKEN || '1234';
    this.NODE_ENV = process.env.NODE_ENV || '';
    this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE || '';
    this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO || '';
    this.CLIENT_URL = process.env.CLIENT_URL || '';
    this.EC2_URL = process.env.EC2_URL || '';
    this.PORT = process.env.PORT || '';
    this.AWS_REGION = process.env.AWS_REGION || ''
    this.AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || ''
    this.AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || ''
  }

  public createLogger(name: string): bunyan {
    return bunyan.createLogger({ name, level: 'debug' });
  }

  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Configuration ${key} is undefined.`);
      }
    }
  }

}

export const config: Config = new Config();
