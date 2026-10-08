import {
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Query,
  Ip,
  ForbiddenException
} from '@nestjs/common';
import { CategoryService } from './category.service.js';
import { LoggerService } from '../logger/logger.service.js';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  private readonly logger = new LoggerService(CategoryController.name);

  @Get()
  findAll(@Ip() ip: string,
    @Query('deleted', new ParseBoolPipe({ optional: true })) deleted?: boolean,
  ) {
    this.logger.log(`Request for ALL Categories\t${ip}`, CategoryController.name);
    return this.categoryService.findAll(deleted);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.findOne(id);
  }
}
