import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'mssql',
        host: configService.get<string>('SQL_SERVER_HOST'),
        port: Number(configService.get<string>('SQL_SERVER_PORT') ?? 1433),
        username: configService.get<string>('SQL_SERVER_USERNAME'),
        password: configService.get<string>('SQL_SERVER_PASSWORD'),
        database: configService.get<string>('SQL_SERVER_TICKET_DATABASE'),
        autoLoadModels: true,
        synchronize: false,
      }),
    }),
  ],
})
export class DatabaseModule {}
