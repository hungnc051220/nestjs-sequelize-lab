import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './model/category.model.js';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private categoryModel: typeof Category) {}

  findAll(deleted?: boolean): Promise<Category[]> {
    if (deleted !== undefined) {
      return this.categoryModel.findAll({
        where: { deleted },
      });
    }
    return this.categoryModel.findAll();
  }

  async findOne(id: number): Promise<Category> {
    const category = await this.categoryModel.findByPk(id);
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return category;
  }
}
