import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBearerAuth, ApiUnauthorizedResponse, ApiAcceptedResponse } from '@nestjs/swagger';
import { BearerAuthGuard } from './auth/bearer.guard';

@ApiUnauthorizedResponse({description: 'Unauthorized'})
@ApiBearerAuth()
@UseGuards(BearerAuthGuard)
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
