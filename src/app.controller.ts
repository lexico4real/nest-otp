import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('token')
  async generateToken(): Promise<any> {
    return await this.appService.generateToken();
  }

  @Post('validate-token')
  async validateToken(
    @Body('secret') secret: string,
    @Body('token') token: string,
  ): Promise<boolean> {
    return await this.appService.validateToken(secret, token);
  }
}
