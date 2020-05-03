import User from "src/modules/user/models/user.entity";
import { Controller, Get, Post, Body, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import {
  ApiBearerAuth,
  ApiTags,
  ApiOkResponse,
  ApiOperation,
} from "@nestjs/swagger";
import { CurrentUser } from "../auth/current-user.decorator";
import ApiUpdateResponse from "src/helpers/api-update.response";
import { ApiResponseUnauthorizedResponse, ApiResponseForbiddenResponse } from "src/helpers/api-response.decorator";
import { Auth } from "../auth/auth.decorator";
import UserEdit from "./models/user-edit";

@ApiTags("User")
@ApiResponseUnauthorizedResponse()
@ApiResponseForbiddenResponse()
@ApiBearerAuth()
@Auth()
@Controller("api/v1/User")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Put()
  @ApiOperation({ summary: "Update currently logged in user" })
  @ApiOkResponse({ type: ApiUpdateResponse })
  async updateUser(
    @CurrentUser() id: string,
    @Body() userEdit: UserEdit
  ): Promise<ApiUpdateResponse> {
    const result = await this.userService.updateUser(id, userEdit);
    return {
      modelId: result._id
    };
  }

  @Get()
  @ApiOperation({ summary: "Get currently logged in user" })
  @ApiOkResponse({ type: User })
  async getUser(@CurrentUser() user: User): Promise<User> {
    return user;
  }
}
