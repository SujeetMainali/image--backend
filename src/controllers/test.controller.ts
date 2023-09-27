import { Controller, Get, Route, Tags } from "tsoa";

@Tags("test")
@Route("/test")
export class TestController extends Controller {
  @Get("/")
  async test() {
    return {
      message: "test successful",
    };
  }
}
