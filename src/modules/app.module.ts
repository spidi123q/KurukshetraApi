import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseConnectModule } from "../config/settings";
import { UserModule } from "./user/user.module";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from './auth/auth.module';
import EnvValidationSchema from "../config/env.validator";
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from "./auth/roles.guard";
import { LookupModule } from './lookup/lookup.module';
import configuration from "src/config/configuration";

@Module({
  imports: [ConfigModule.forRoot({validationSchema: EnvValidationSchema, load: [configuration],}), MongooseConnectModule(), UserModule, AuthModule, LookupModule,],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
