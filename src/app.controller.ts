import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log("AppController -> started")
  }

  @Get()
  getHello(): string {
    this.appService.getHello();
    return "s"
  }
}
