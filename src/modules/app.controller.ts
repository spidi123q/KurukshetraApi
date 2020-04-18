import { logger } from "./../config/logger";
import { Controller, Get, Request } from "@nestjs/common";
import { AppService } from "./app.service";
import {
  ApiBearerAuth,
  ApiTags,
  ApiOkResponse,
  ApiOperation,
} from "@nestjs/swagger";
import User from "./user/models/user.entity";
import { CurrentUser } from "./auth/current-user.decorator";
import _ from 'lodash'
import { Roles } from "./auth/roles.decorator";
import { UserRoles } from "./user/models/enum";
import { ApiResponseUnauthorizedResponse, ApiResponseForbiddenResponse } from "src/helpers/api-response.decorator";
import { Auth } from "./auth/auth.decorator";

@ApiTags("App")
@ApiResponseUnauthorizedResponse()
@ApiResponseForbiddenResponse()
@ApiBearerAuth()
@Auth()
@Controller("api/v1")
export class AppController {
  constructor(private readonly appService: AppService) {
    logger.info("AppController -> started");
  }

  @Get("Connection/Ping")
  @ApiOperation({ summary: "Check database connection" })
  @ApiOkResponse({ type: Boolean })
  @Roles(UserRoles.Guest)
  ping(@CurrentUser() user: User): any {
    console.log("User ping from id : ", user._id);
    return !_.isNil(user)
  }
}
