import { prop, getModelForClass } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger";
import { TimeStamps, Base } from "@typegoose/typegoose/lib/defaultClasses";
import shortid from "shortid";
import { TypegooseClassWithOptions } from "nestjs-typegoose/dist/typegoose-class.interface";
import { UserRoles } from "./enum";

class User implements TimeStamps {
  @ApiProperty({ description: "User identifier" })
  @prop({ default: shortid.generate })
  _id: string;

  @ApiProperty({ description: "Role of the user in the app", enum: UserRoles })
  @prop({ enum: UserRoles, default: UserRoles.Guest })
  role: UserRoles;

  @ApiProperty({ description: "Firebase user uid" })
  @prop({ require: true })
  firebaseId: string;

  @ApiProperty({ description: "Date at which document is created" })
  createdAt: Date;

  @ApiProperty({ description: "Date at which document is updated" })
  updatedAt: Date;
}

export const UserSchema: TypegooseClassWithOptions = {
  typegooseClass: User,
  schemaOptions: {
    timestamps: true
  }
};

export default User;
