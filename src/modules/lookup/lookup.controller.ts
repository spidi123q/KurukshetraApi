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
import {
  PlaceAutocompleteResponse,
  PlaceDetailsResponse,
  ReverseGeocodingResponse,
} from "@google/maps";

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
  ): Promise<PlaceAutocompleteResponse> {
    const result = await this.lookupService.getPlacesAutocomplete(
      search,
      token
    );
    return result;
  }

  @Get("/Place/:placeId")
  @ApiOperation({ summary: "Get place details" })
  async getPlaceDetail(
    @Param("placeId") placeId: string
  ): Promise<PlaceDetailsResponse> {
    const result = await this.lookupService.getPlaceDetail(placeId);
    return result;
  }

  @Get("/Place/:lat/:lng")
  @ApiOperation({ summary: "Get place details from location coordiates" })
  async getPlaceFromCoordinates(
    @Param("lat") lat: number,
    @Param("lng") lng: number
  ): Promise<ReverseGeocodingResponse> {
    const result = await this.lookupService.getPlaceFromCoordinates(lat, lng);
    return result;
  }
}
