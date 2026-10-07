import { Injectable } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './category/model/category.model.js';
import { CategoryModule } from './category/category.module.js';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
