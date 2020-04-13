import { prop, getModelForClass } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger";

class User {
  @ApiProperty()
  @prop()
  name?: string;
}

export default User;
