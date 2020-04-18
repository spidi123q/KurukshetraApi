import { ApiUnauthorizedResponse, ApiForbiddenResponse } from "@nestjs/swagger"


export const ApiResponseUnauthorizedResponse = () => ApiUnauthorizedResponse({ description: "Unauthorized: Not authenticated" })
export const ApiResponseForbiddenResponse = () => ApiForbiddenResponse({description:'Forbidden: Do not have sufficient permission'})