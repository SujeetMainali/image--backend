import MediaUpload from "../entities/media/mediaUpload.entity";
import { AppDataSource } from "../config/database.config";
import path from "path";
import { MediaDTO } from "../dtos/media.dto";
import { existsSync } from "fs";
import sharp from "sharp";
export const TEMP_FOLDER_PATH = path.join(
  __dirname,
  "..",
  "..",
  "public",
  "temp"
);
export const PUBLIC_FOLDER_PATH = path.join(
  __dirname,
  "..",
  "..",
  "public",
  "uploads"
);
class MediaUploadService {
  constructor(
    private mediaUploadRepo = AppDataSource.getRepository(MediaUpload)
  ) {}

  async create(data: MediaDTO) {
    return await this.mediaUploadRepo
      .create({
        mimeType: data.mimeType,
        type: data.type,
        name: data.name,
      })
      .save();
  }

  async uploadFile(data: MediaDTO, width: number, height: number) {
    const tempFilePath = path.join(TEMP_FOLDER_PATH, data.type, data.name);
    if (!existsSync(tempFilePath)) {
      throw new Error("File not found");
    }
    const uploadFilePath = path.join(PUBLIC_FOLDER_PATH, data.type, data.name);

    const resizedImage = await sharp(tempFilePath)
      .resize(width, height)
      .toBuffer();

    let newMedia = await this.create(data);
    newMedia.transferImageFromTempToUploadFolder(data.type);
    await sharp(resizedImage).toFile(uploadFilePath);
    return newMedia;
  }
}

export default new MediaUploadService();
