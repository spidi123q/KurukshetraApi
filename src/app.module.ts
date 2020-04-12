import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseConnectModule } from './config/settings';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [MongooseConnectModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
