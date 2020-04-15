import { prop, getModelForClass } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger";
import shortid from 'shortid';
import { UserRoles } from "./enum";

class User {

  @ApiProperty({ description: "User identifier" })
  @prop({default: shortid.generate})
  _id: string;

  @ApiProperty({ description: "Role of the user in the app" })
  @prop({ enum: UserRoles, default: UserRoles.Guest })
  Role: string;

  @ApiProperty({ description: "Firebase user uid" })
  @prop({ require: true, unique: true })
  FirebaseId: string;
}

export default User;
