import { Controller, Get, Post, Body, Patch, Param, Delete , Headers} from '@nestjs/common';
import { ChatService } from './chat.service';
import {
  CreateUserDto,
  InsertUserDto,
  CreateRoomDto,
  InsertChat,
  InsertFindChat,
  InsertCreateUserDto,
} from './dto/create-chat.dto';
import { v4 as uuid } from 'uuid';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('user')
  async createUser(@Body() user_name: InsertCreateUserDto) {
    // console.log(user);
    const user = new CreateUserDto();
    user.user_id = uuid();
    user.user_name = user_name.user_name;
    return await this.chatService.createUsers(user);
  }

  @Get('user')
  findAll() {
    return this.chatService.findAll();
  }

  @Post('room')
  createRoom(@Body() roomInsertDto: InsertUserDto) {
    const room = new InsertUserDto();
    room.user_id = roomInsertDto.user_id;
    return this.chatService.createRooms(room);
  }

  @Post('joinroom')
  createJoinRoom(@Body() roomInsertDto: InsertUserDto) {
    const room = new InsertUserDto();
    room.user_id = roomInsertDto.user_id;
    return this.chatService.createJoinRooms(room);
  }

  @Get('room')
  findAllRoom(@Headers() insertUser: InsertUserDto) {
    const userId = new InsertUserDto();
    userId.user_id = insertUser.user_id;
    return this.chatService.findAllRooms(userId);
  }

  @Post('addchat')
  createChat(@Body() insertChat: InsertChat) {
    const chat = new InsertChat();
    chat.room_id = insertChat.room_id;
    chat.create_by = insertChat.create_by;
    chat.chat = insertChat.chat;
    return this.chatService.createChats(chat);
  }

  @Get('getchat')
  findAllChat(@Headers() room_id: InsertFindChat) {
    const roomId = new InsertFindChat();
    roomId.room_id = room_id.room_id;
    return this.chatService.findChatByRoom(roomId);
  }
}
