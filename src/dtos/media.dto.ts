import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { MediaType } from "../constants/enums";
export class MediaDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(MediaType)
  type: MediaType;

  @IsNotEmpty()
  mimeType: string;
}
