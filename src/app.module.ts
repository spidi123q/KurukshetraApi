import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseConnectModule } from "./config/settings";
import { UserModule } from "./modules/user/user.module";
import { ConfigModule } from "@nestjs/config";
import EnvValidationSchema from "./config/env.validator";

@Module({
  imports: [ConfigModule.forRoot({validationSchema: EnvValidationSchema}), MongooseConnectModule(), UserModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
