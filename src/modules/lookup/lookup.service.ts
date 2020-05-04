import { Injectable } from "@nestjs/common";
import {
  PlaceAutocompleteResponse,
  PlaceDetailsResponse,
  GoogleMapsClientWithPromise,
  ReverseGeocodingResponse,
  ClientResponse,
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
  async getPlaceDetail(placeid: string): Promise<PlaceDetailsResponse> {
    const result = await this.googleMapsClient
      .place({
        placeid,
      })
      .asPromise();
    return result.json;
  }

  /**
   * Get full palace details from location coordinates
   * @param lat Latitude
   * @param lng Longitude
   */
  async getPlaceFromCoordinates(lat: number, lng: number): Promise<ReverseGeocodingResponse> {
    const result = await this.googleMapsClient.reverseGeocode({
      latlng: `${lat},${lng}`
    }).asPromise()
    return result.json
  }
}
