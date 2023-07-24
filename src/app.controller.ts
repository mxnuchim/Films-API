import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Default route /
   * @returns some basic intro text
   */
  @ApiOperation({
    summary: 'Default route',
    description: 'This is the root route "/" You can check it out',
  })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
