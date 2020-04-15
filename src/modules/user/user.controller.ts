import User from "src/modules/user/user.entity";
import { Controller, Get, UseGuards, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import {
  ApiResponse,
  ApiBearerAuth,
  ApiUnauthorizedResponse,
  ApiTags
} from "@nestjs/swagger";
import { BearerAuthGuard } from "../auth/bearer.guard";


@ApiTags('User')
@ApiUnauthorizedResponse({ description: "Unauthorized" })
@ApiBearerAuth()
@UseGuards(BearerAuthGuard)
@Controller('api/v1/User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async getCats(): Promise<any> {
    console.log("UserController -> constructor -> res");
    return {};
  }
}
