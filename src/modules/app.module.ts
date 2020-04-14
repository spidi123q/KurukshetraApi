import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseConnectModule } from "../config/settings";
import { UserModule } from "./user/user.module";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from './auth/auth.module';
import EnvValidationSchema from "../config/env.validator";

@Module({
  imports: [ConfigModule.forRoot({validationSchema: EnvValidationSchema}), MongooseConnectModule(), UserModule, AuthModule,],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
