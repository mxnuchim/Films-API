import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello!\n You've reached my films API project. You won't find anything here but you could check out the latest films at /films/get-films`;
  }
}
