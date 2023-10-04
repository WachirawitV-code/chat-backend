import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ChatGptModule } from './chat-gpt/chat-gpt.module';
import { NinjaModule } from './ninja/ninja.module';
import { HttpModule } from '@nestjs/axios';
import { ProductModule } from './product/product.module';
import { dataBaseConfig } from './database/database.config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ChatModule } from './chat/chat.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    NinjaModule,
    HttpModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ProductModule,
    ChatModule,
    SequelizeModule.forRoot(dataBaseConfig),
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: './app.sqlite',
    //   entities: [Users, Users_chats, Users_rooms],
    //   synchronize: process.env.NODE_ENV != 'production',
    //   autoLoadEntities: true,
    // }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   password: 'senestia',
    //   username: 'postgres',
    //   entities: [Users, Users_chats, Users_rooms],
    //   database: 'pgWithNest',
    //   synchronize: process.env.NODE_ENV != 'production',
    //   logging: true,
    // }),
  ],
})
export class AppModule {}
