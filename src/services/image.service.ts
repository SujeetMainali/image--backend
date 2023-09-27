import { ImageEntity } from "../entities/image.entity";
import { AppDataSource } from "../config/database.config";
import { MediaDTO } from "../dtos/media.dto";
import mediaUploadService from "./mediaUpload.service";

export interface image {
  title: string;
  uploadedImage: MediaDTO;
  width: number;
  height: number;
}

class ImageService {
  constructor(private imageRepo = AppDataSource.getRepository(ImageEntity)) {}

  async create(data: image) {
    const image = new ImageEntity();
    image.title = data.title;
    if (data.uploadedImage) {
      image.uploadedImage = await mediaUploadService.uploadFile(
        data.uploadedImage,
        data.width,
        data.height
      );
    }
    const uploadedImage =  await this.imageRepo.create(image).save();
    const imagePath = await this.imageRepo.findOne({
      where:{
        id: uploadedImage.id
      },
      relations: ["uploadedImage"],
    })
    return imagePath;

  }

  async getAll() {
    return await this.imageRepo.find({
      relations: ["uploadedImage"],
    });
  }
}

export default new ImageService();
