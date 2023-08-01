import { Injectable } from '@nestjs/common';
import { htmlContent } from './utils/html';

@Injectable()
export class AppService {
  getHello(): string {
    return htmlContent;
  }
}
