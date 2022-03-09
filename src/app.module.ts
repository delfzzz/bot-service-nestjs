import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BotsModule } from './bots/bots.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 33006,
      username: 'root',
      password: 'root',
      database: 'bots',
      autoLoadEntities: true,
    }),
    BotsModule,
  ],
})
export class AppModule {}
