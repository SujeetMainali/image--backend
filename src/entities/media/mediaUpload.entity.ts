import { AfterLoad, Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { CommonField } from "../../entities/commonField.entity";
import { MediaType } from "../../constants/enums";
import path, { resolve } from "path";
import fs from "fs";
import { DotenvConfig } from "../../config/env.config";
import { ImageEntity } from "../../entities/image.entity";

@Entity({
  name: "media_upload",
})
class MediaUpload extends CommonField {
  @Column()
  name: string;

  @Column({
    name: "mime_type",
  })
  mimeType: string;

  @Column({
    type: "enum",
    enum: MediaType,
  })
  type: MediaType;

  path: string;

  @OneToOne(() => ImageEntity, (imageEntity) => imageEntity.uploadedImage)
  @JoinColumn({
    name: "image_id",
  })
  uploadedImage: ImageEntity;

  transferImageFromTempToUploadFolder(mediaType: MediaType) {
    let folderName = mediaType;
    let PUBLIC_FOLDER_PATH = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "public",
      "uploads"
    );
    if (!fs.existsSync(PUBLIC_FOLDER_PATH)) {
      fs.mkdirSync(PUBLIC_FOLDER_PATH, {
        recursive: true,
      });
    }

    const TEMP_FOLDER_PATH = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "public",
      "temp",
      this.type
    );

    const UPLOAD_FOLDER_PATH = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "public",
      "uploads",
      folderName
    );
    !fs.existsSync(UPLOAD_FOLDER_PATH) &&
      fs.mkdirSync(UPLOAD_FOLDER_PATH, { recursive: true });

    fs.renameSync(
      resolve(TEMP_FOLDER_PATH, this.name),
      path.join(UPLOAD_FOLDER_PATH, this.name)
    );
  }

  @AfterLoad()
  async loadImagePath() {
    this.path = `${DotenvConfig.BASE_URL}/uploads/${this.type}/${this.name}`;
  }
}

export default MediaUpload;
