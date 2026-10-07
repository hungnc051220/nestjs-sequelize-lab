import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller.js';
import { CategoryService } from './category.service.js';
import { Category } from './model/category.model.js';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryModule],
})
export class CategoryModule {}
