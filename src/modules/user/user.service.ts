import { Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ReturnModelType } from "@typegoose/typegoose";
import User from "src/modules/user/user.entity";
import mongoose from "mongoose";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>
  ) {}

  /**
   * Create a new user with minimum properties
   * @param uid Firebase user uid
   */
  async createUser(uid: string): Promise<User> {
    const user = await this.userModel.create({
      FirebaseId: uid
    });
    return user;
  }

  /**
   * Get app user by firebase uid
   * @param uid Firebase user uid
   */
  async getUserByFirebaseId(uid: string): Promise<User | null> {
    const user = await this.userModel.findOne({FirebaseId: uid})
    return user
  }
}
