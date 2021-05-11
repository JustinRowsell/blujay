import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import Request from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getNewSession(
    @Param('amount') amount: number,
    @Param('name') name: string,
  ): Promise<string> {
    return this.appService.getNewCheckoutSession(name, amount);
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
