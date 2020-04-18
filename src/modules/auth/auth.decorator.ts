import { RolesGuard } from './roles.guard';
import { UseGuards } from "@nestjs/common";
import { BearerAuthGuard } from "./bearer.guard";

export const Auth = () => UseGuards(BearerAuthGuard, RolesGuard)