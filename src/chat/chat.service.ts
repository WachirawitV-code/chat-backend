import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateRoomDto,
  InsertUserDto,
  CreateUserDto,
  InsertChat,
  CreateChat,
  InsertFindChat,
} from './dto/create-chat.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './entities/name.entity';
import { Users_rooms } from './entities/rooms.entity';
import { Users_chats } from './entities/chats.entity';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Users)
    private userRepository: typeof Users,

    @InjectModel(Users_rooms)
    private roomRepository: typeof Users_rooms,

    @InjectModel(Users_chats)
    private chatRepository: typeof Users_chats,
  ) {}

  async createUsers(users: CreateUserDto) {
    const newUserName = users.user_name;
    const sameUser = await this.userRepository.findOne({
      where: {
        user_name: newUserName,
      },
    });
    if (sameUser) {
      console.log('oldUser');
      return sameUser;
    } else {
      console.log('newUser');
      const newUser = await this.userRepository.create(users);
      // const roomName = ['Room1', 'Room2', 'Room3'];
      // await roomName.forEach((room) => {
      //   const newRoom = new CreateRoomDto();
      //   newRoom.user_id = users.user_id;
      //   newRoom.room_id = uuid();
      //   newRoom.room_name = room;
      //   this.roomRepository.create(newRoom);
      // });
      const newNinjaRoom = new CreateRoomDto();
      newNinjaRoom.user_id = users.user_id;
      newNinjaRoom.room_id = uuid();
      newNinjaRoom.room_name = 'Room Ninja';
      await this.roomRepository.create(newNinjaRoom);
      const newJoinRoom = new CreateRoomDto();
      newJoinRoom.user_id = users.user_id;
      newJoinRoom.room_id = 'JoinRoomID';
      newJoinRoom.room_name = 'Global Room';
      await this.roomRepository.create(newJoinRoom);
      return newUser;
    }
  }

  findAll() {
    return this.userRepository.findAll();
  }

  async createRooms(newRoom: InsertUserDto) {
    const userId = newRoom.user_id;
    const roomName = ['Room1', 'Room2', 'Room3'];
    roomName.forEach((room) => {
      const newRoom = new CreateRoomDto();
      newRoom.user_id = userId;
      newRoom.room_id = uuid();
      newRoom.room_name = room;
      return this.roomRepository.create(newRoom);
    });
  }

  async createJoinRooms(newRoom: InsertUserDto) {
    console.log(newRoom);
    const userId = newRoom.user_id;
    const newJoinRoom = new CreateRoomDto();
    newJoinRoom.user_id = userId;
    newJoinRoom.room_id = 'JoinRoomID';
    newJoinRoom.room_name = 'JoinRoom';
    return this.roomRepository.create(newJoinRoom);
  }

  findAllRooms(userId: InsertUserDto) {
    const userid = userId.user_id;
    return this.roomRepository.findAll({
      where: {
        user_id: userid,
      },
    });
  }

  async createChats(newChat: InsertChat) {
    const nowDate = new Date().toUTCString();
    const newChatObject = new CreateChat();
    newChatObject.chat_id = uuid();
    newChatObject.room_id = newChat.room_id;
    newChatObject.created_by = newChat.create_by;
    newChatObject.created_at = nowDate;
    newChatObject.chat = newChat.chat;
    if (newChatObject.room_id !== 'JoinRoomID') {
      await this.chatRepository.create(newChatObject);
      const TRIVIA_URL: string = 'https://api.api-ninjas.com/v1/randomword';
      const headersRequest = {
        'X-Api-Key': 'Em/Yu9c5wmQGGBgIQE8m1Q==WfwVNwQxnm4QLCMT',
      };
      const response = await axios({
        method: 'GET',
        url: TRIVIA_URL,
        headers: headersRequest,
      }).catch(() => {
        throw new NotFoundException('API not available');
      });
      const nowDateNinja = new Date().toUTCString();
      const newChatNinja = new CreateChat();
      newChatNinja.chat_id = uuid();
      newChatNinja.room_id = newChat.room_id;
      newChatNinja.created_by = "Ninja";
      newChatNinja.created_at = nowDateNinja;
      newChatNinja.chat = response.data?.word;
      return await this.chatRepository.create(newChatNinja);
    } else {
      return await this.chatRepository.create(newChatObject);
    }
  }

  findChatByRoom(roomId: InsertFindChat) {
    const userid = roomId.room_id;
    return this.chatRepository.findAll({
      where: {
        room_id: userid,
      },
    });
  }
}
