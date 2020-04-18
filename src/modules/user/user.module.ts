import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { TypegooseModule } from "nestjs-typegoose";
import { UserSchema } from "src/modules/user/models/user.entity";

@Module({
  imports: [TypegooseModule.forFeature([UserSchema])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
