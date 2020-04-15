import { logger } from "./../../config/logger";
import { Injectable } from "@nestjs/common";
import FirebaseAdmin from "firebase-admin";
import { UserService } from "../user/user.service";
import User from "../user/user.entity";

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  /**
   * Validate user by token and returns user. Create one if not exisit
   * @param token Bearer token
   */
  async validateUser(token: string): Promise<User | null> {
    try {
      const firebaseUser = await FirebaseAdmin.auth().verifyIdToken(token);
      logger.info("ID Token correctly decoded", firebaseUser);
      const appUser = await this.userService.getUserByFirebaseId(
        firebaseUser.uid
      );
      if (appUser) {
        logger.info("User exist in DB");
        return appUser;
      } else {
        logger.info("Creating new user in DB");
        const newUser = await this.userService.createUser(firebaseUser.uid);
        return newUser;
      }
    } catch (err) {
      logger.error("Error while verifying Firebase ID token:", err);
      return null;
    }
  }
}
