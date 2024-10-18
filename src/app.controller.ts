import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly loggger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    try {
      throw new Error('This is an error');
    } catch (e) {
      console.log(e);
      this.loggger.error('This is an error');
    }
  }
}
