import { Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ReturnModelType } from "@typegoose/typegoose";
import User from "src/modules/user/models/user.entity";
import UserEdit from "./models/user-edit";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>
  ) {}

  async updateUser(id: string, userEdit: UserEdit): Promise<User> {
    const result = this.userModel.findByIdAndUpdate(id, userEdit);
    return result;
  }

  /**
   * Create a new user with minimum properties
   * @param uid Firebase user uid
   */
  async createUser(uid: string): Promise<User> {
    const user = await this.userModel.create({
      firebaseId: uid
    });
    return user;
  }

  /**
   * Get app user by firebase uid
   * @param uid Firebase user uid
   */
  async getUserByFirebaseId(uid: string): Promise<User | null> {
    const user = await this.userModel.findOne({ firebaseId: uid });
    return user;
  }
}
