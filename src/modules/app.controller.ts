import { logger } from "./../config/logger";
import { Controller, Get, UseGuards, Request } from "@nestjs/common";
import { AppService } from "./app.service";
import {
  ApiBearerAuth,
  ApiUnauthorizedResponse,
  ApiAcceptedResponse,
  ApiTags,
  ApiResponseProperty,
  ApiResponse,
  ApiOkResponse
} from "@nestjs/swagger";
import { BearerAuthGuard } from "./auth/bearer.guard";
import User from "./user/user.entity";
import { CurrentUser } from "./auth/current-user.decorator";

@ApiTags("App")
@ApiUnauthorizedResponse({ description: "Unauthorized" })
@ApiBearerAuth()
@UseGuards(BearerAuthGuard)
@Controller("api/v1")
export class AppController {
  constructor(private readonly appService: AppService) {
    logger.info("AppController -> started");
  }

  /**
   * dasdas
   */
  @Get("Connection/Ping")
  @ApiOkResponse({ type: Boolean })
  ping(@CurrentUser() user: User): boolean {
    logger.log("User ping from id : ", user._id);
    return true;
  }
}
