import { Injectable } from "@nestjs/common";
import {
  PlaceAutocompleteResponse,
  PlaceDetailsResponse,
  GoogleMapsClientWithPromise,
} from "@google/maps";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class LookupService {
  private readonly googleMapsClient: GoogleMapsClientWithPromise;

  constructor(private configService: ConfigService) {
    this.googleMapsClient = this.configService.get<GoogleMapsClientWithPromise>(
      "googleMapsClient"
    );
  }

  /**
   *
   * @param input Search string
   * @param sessiontoken uid generated from client side as asession token fog placess api call (not auth tokens)
   */
  async getPlacesAutocomplete(
    input: string,
    sessiontoken: string
  ): Promise<PlaceAutocompleteResponse> {
    const result = await this.googleMapsClient
      .placesAutoComplete({
        types: "(cities)",
        input,
        sessiontoken,
      })
      .asPromise();
    return result.json;
  }

  /**
   * Get all details of a place
   * @param placeid Google place id
   */
  async getPlaceDetail(placeid: string) {
    const result = await this.googleMapsClient
      .place({
        placeid,
      })
      .asPromise();
    return result.json;
  }
}
