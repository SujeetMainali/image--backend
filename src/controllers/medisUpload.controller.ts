import { randomBytes } from "crypto";
import path from "path";
import {
  Consumes,
  Controller,
  Path,
  Post,
  Route,
  Tags,
  UploadedFile,
  UploadedFiles,
} from "tsoa";
import fs from "fs";
import { MediaType } from "../constants/enums";

@Tags("MediaUpload")
@Route("/mediaUpload/:type")
export class MediaUploadController extends Controller {
  @Post("/single/")
  async uploadSingle(
    @UploadedFile() file: Express.Multer.File,
    @Path() type: MediaType
  ) {
    // const file = file as Express.Multer.File
    if (!file) {
      throw new Error("No files uploaded");
    }

    //file type validation check
    const validFileTypes = ["image/png", "image/jpg", "image/jpeg"];
    if (!validFileTypes.includes(file.mimetype)) {
      throw new Error("Invalid file type");
    }
    const fileName = `${Date.now()}__${randomBytes(3).toString("hex")}__${
      file.originalname
    }`;

    //upload to server temp folder
    const tempFolderPath = path.join(
      __dirname,
      "..",
      "..",
      "public",
      "temp",
      type
    );

    !fs.existsSync(tempFolderPath) &&
      fs.mkdirSync(tempFolderPath, { recursive: true });

    const tempFilePath = path.join(tempFolderPath, fileName);

    await fs.promises.writeFile(tempFilePath, file.buffer);

    return {
      success: true,
      data: {
        name: fileName,
        mimeType: file.mimetype,
        type: type,
      },
      message: "media uploaded",
    };
  }
}
