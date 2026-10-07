import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { CategoryService } from './category.service.js';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findAll(@Query("Deleted") Deleted?: string) {
    return this.categoryService.findAll(Deleted);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.findOne(id);
  }
}
