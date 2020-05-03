import { logger } from "./../config/logger";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {
    logger.info("AppService -> started");
    configService.get("initFirebase")();
  }
}
