import { Controller, Get, LoggerService, Param, Post, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import Request from 'express';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly configService: ConfigService) {}

  @Get()
  async getNewSession(
    @Query('amount') amount: number,
    @Query('name') name: string,
  ): Promise<string> {
    return this.appService.getNewCheckoutSession(name, amount, this.configService.get<string>('WEBSITE_URL'));
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
