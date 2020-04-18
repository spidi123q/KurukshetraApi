import { ApiProperty } from "@nestjs/swagger";

class ApiUpdateResponse {
  @ApiProperty({ description: "Identifier od updated document" })
  modelId: string;
}

export default ApiUpdateResponse;
