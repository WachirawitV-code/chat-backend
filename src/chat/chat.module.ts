import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './entities/name.entity';
import { Users_chats } from './entities/chats.entity';
import { Users_rooms } from './entities/rooms.entity';

@Module({
  imports: [SequelizeModule.forFeature([Users, Users_rooms, Users_chats])],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
