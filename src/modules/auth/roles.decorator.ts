import { UserRoles } from './../user/models/enum';
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: UserRoles[]) => SetMetadata('roles', roles);