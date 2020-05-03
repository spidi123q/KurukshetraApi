import { PickType } from "@nestjs/swagger";
import User from "./user.entity";

export default class UserEdit extends PickType(User, [
  "role",
  "dob",
  "name",
  "location",
]) {}
