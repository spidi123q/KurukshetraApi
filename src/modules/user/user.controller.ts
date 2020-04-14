import User from "src/modules/user/user.entity";
import { Controller, Get, UseGuards, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import {
  ApiResponse,
  ApiBearerAuth,
  ApiUnauthorizedResponse
} from "@nestjs/swagger";
import { BearerAuthGuard } from "../auth/bearer.guard";


@ApiUnauthorizedResponse({ description: "Unauthorized" })
@ApiBearerAuth()
@UseGuards(BearerAuthGuard)
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async getCats(): Promise<any> {
    console.log("UserController -> constructor -> res");
    return {};
  }
}
