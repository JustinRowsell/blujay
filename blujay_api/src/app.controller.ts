import { Controller, Get, LoggerService, Param, Post, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import Request from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getNewSession(
    @Query('amount') amount: number,
    @Query('name') name: string,
    @Query('redirectUri') redirectUri: string
  ): Promise<string> {
    return this.appService.getNewCheckoutSession(name, amount, redirectUri);
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
