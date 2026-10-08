import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module.js';
import { DatabaseModule } from './database/database.module.js';
import { LoggerModule } from './logger/logger.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    CategoryModule,
    LoggerModule,
  ],
})
export class AppModule {}
