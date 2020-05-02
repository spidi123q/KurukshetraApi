import { ApiProperty } from "@nestjs/swagger";
import User from "./user.entity";
import { UserRoles } from "./enum";
import GeoJSON from "src/models/GeoJSON";

export class UserEdit implements Partial<User> {
  @ApiProperty({ description: "Role of the user in the app", enum: UserRoles })
  role: UserRoles;

  @ApiProperty({ description: "Date of birth of the user" })
  dob?: Date;

  @ApiProperty({ description: "Name of the user" })
  name?: string;

  @ApiProperty({ description: "Location of the user" })
  location?: GeoJSON;
}
