import imageService, { image } from "../services/image.service";
import { Body, Controller, Get, Post, Route, Tags } from "tsoa";

@Tags("Image")
@Route("/image")
export class IMageController extends Controller {
  @Post("/")
  async create(@Body() data: image) {
    const image = await imageService.create(data);
    return {
      success: true,
      data: image,
      message: "image created",
    };
  }

//   @Get("/")
//   async getAll() {
//     const images = await imageService.getAll();
//     return {
//       success: true,
//       data: images,
//       message: "images fetched",
//     };
//   }
}
