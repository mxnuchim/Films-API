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

  @ApiOperation({
    summary: 'Health Check Endpoint',
    description: 'Checks Health of server and if it runs',
  })
  @Get('/health-check')
  healthCheck(): string {
    return `Server's running normally on http://localhost${
      process.env.PORT || 3000
    }/api.\nNothing to worry about.`;
  }
}
