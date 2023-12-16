import { Controller, Get } from '@nestjs/common';

import { Response } from './app.controller.response';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): Response {
    const result = this.appService.getData();
    return Response.encode(result);
  }
}
