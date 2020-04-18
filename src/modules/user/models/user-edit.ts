import { ApiProperty } from '@nestjs/swagger';
import User from "./user.entity";
import { UserRoles } from "./enum";


export class UserEdit implements Pick<User, 'role'> {
    @ApiProperty({ description: "Role of the user in the app", enum: UserRoles })
    role: UserRoles
}