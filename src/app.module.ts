import { Module } from '@nestjs/common';
import OtpGenerator from 'common/otp/otp-generator';
import OtpValidator from 'common/otp/otp-validator';
import SecretGenerator from 'common/otp/secret-generator';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SecretGenerator, OtpGenerator, OtpValidator],
})
export class AppModule {}
