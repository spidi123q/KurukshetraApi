import { UserRoles } from "./../user/models/enum";
import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import _ from 'lodash'

@Injectable()
export class RolesGuard implements CanActivate {
  readonly allowedForGuest: UserRoles[] = [UserRoles.Guest];
  readonly allowedForUser: UserRoles[] = [UserRoles.Guest, UserRoles.User];
  readonly allowedForAdmin: UserRoles[] = [
    UserRoles.Guest,
    UserRoles.User,
    UserRoles.Admin
  ];
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<UserRoles[]>(
      "roles",
      context.getHandler()
    );
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const role: UserRoles = request.user.role;
    return this.validate(role, roles);
  }

  /**
   *
   * @param role Role of the current user
   * @param roles List of roles that are allowed to acces resource
   */
  validate(role: UserRoles, roles: UserRoles[]): boolean {
    let isAllowed: boolean = true;
    for (const item of roles) {
      isAllowed = isAllowed && this.isAuthorized(role, item);
    }
    return isAllowed;
  }

  /**
   * Check if user  has access to a particular resource
   * @param currentRole Role signed in user
   * @param requiredRole Role requied for resource access
   */
  isAuthorized = (currentRole: UserRoles, requiredRole: UserRoles): boolean => {
    switch (currentRole) {
      case UserRoles.Guest:
        return _.includes(this.allowedForGuest, requiredRole);
      case UserRoles.User:
        return _.includes(this.allowedForUser, requiredRole);
      case UserRoles.Admin:
        return _.includes(this.allowedForAdmin, requiredRole);
      default:
        return false;
    }
  };
}
