import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './model/category.model.js';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private categoryModel: typeof Category) {}

  async findAll(Deleted?: string): Promise<Category[]> {
    if (Deleted) {
      return this.categoryModel.findAll({
        where: { Deleted },
      });
    }
    return this.categoryModel.findAll();
  }

  async findOne(id: number): Promise<Category | null> {
    const category = this.categoryModel.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return category;
  }
}
