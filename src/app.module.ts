import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CategoryModule } from './category/category.module.js';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './category/model/category.model.js';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mssql',
      host: '123.30.24.75',
      port: 1433,
      username: 'sa',
      password: 'Sa@0912009914',
      database: 'CinemaTicketDev',
      models: [Category],
      autoLoadModels: true,
      synchronize: false,
    }),
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
