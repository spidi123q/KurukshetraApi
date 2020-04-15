import { logger } from "./../config/logger";
import { initFirebase } from "../config/settings";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  constructor() {
    logger.info("AppService -> started");
    initFirebase();
  }
}
