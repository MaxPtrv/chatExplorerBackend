import {Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import { AppGateway } from './app/app.gateway';

@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private readonly appGateway: AppGateway
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async postMessage(@Body() body: any) {
    const message = JSON.stringify(body);
    this.appGateway.broadcast(message);
    console.log(message)
    return `Your message was sent to WebSocket clients!
        ${message}`;
  }
}
