import { ApiProperty } from "@nestjs/swagger";
import { prop } from "@typegoose/typegoose";
import { GeoJSONType } from "./enum";

class GeoJSON {
  @ApiProperty({
    description: "Specifies the GeoJSON object type",
    enum: GeoJSONType,
  })
  @prop({ required: true, enum: GeoJSONType })
  type: GeoJSONType;

  @ApiProperty({
    description:
      "Specifying coordinates such longitude first and then latitude",
    type: [Number],
  })
  @prop({ required: true })
  /**
   * Specifying coordinates such longitude first and then latitude
   */
  coordinates: number[] | Array<number[]>;
}

export default GeoJSON;
