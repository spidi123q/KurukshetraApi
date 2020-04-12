import { Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ReturnModelType } from "@typegoose/typegoose";
import User from "src/entities/User";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>
  ) {}

  async hello() {
    const createdCat = new this.userModel({name: 'adsd'})
    return await createdCat.save();
  }
}
