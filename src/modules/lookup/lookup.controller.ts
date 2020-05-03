import { LookupService } from "./lookup.service";
import { Controller, Get, Param, Query, Optional } from "@nestjs/common";
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiOkResponse,
} from "@nestjs/swagger";
import {
  ApiResponseUnauthorizedResponse,
  ApiResponseForbiddenResponse,
} from "src/helpers/api-response.decorator";
import { Auth } from "../auth/auth.decorator";

@ApiTags("Lookup")
@ApiResponseUnauthorizedResponse()
@ApiResponseForbiddenResponse()
//@ApiBearerAuth()
//@Auth()
@Controller("api/v1/Lookup")
export class LookupController {
  constructor(private readonly lookupService: LookupService) {}

  @Get("/Place/Autocomplete/:search")
  @ApiOperation({ summary: "Search place details" })
  async getPlacesAutocomplete(
    @Param("search") search: string,
    @Query("token") token: string
  ) {
    const result = await this.lookupService.getPlacesAutocomplete(
      search,
      token
    );
    return result;
  }

  @Get("/Place/:placeId")
  async getPlaceDetail(@Param("placeId") placeId: string) {
    const result = await this.lookupService.getPlaceDetail(placeId);
    return result;
  }
}
