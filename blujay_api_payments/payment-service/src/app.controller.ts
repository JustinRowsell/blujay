import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import Request from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getNewIntent(@Req() request: Request): string {
    return 'fjdlakfjio2j3ilj2itj290j09j13ij';
  }

  @Post()
  postConfirmation(): string {
    return 'Success';
  }
}
