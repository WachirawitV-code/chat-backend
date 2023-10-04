"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const create_chat_dto_1 = require("./dto/create-chat.dto");
const sequelize_1 = require("@nestjs/sequelize");
const name_entity_1 = require("./entities/name.entity");
const rooms_entity_1 = require("./entities/rooms.entity");
const chats_entity_1 = require("./entities/chats.entity");
const uuid_1 = require("uuid");
const axios_1 = require("axios");
let ChatService = class ChatService {
    constructor(userRepository, roomRepository, chatRepository) {
        this.userRepository = userRepository;
        this.roomRepository = roomRepository;
        this.chatRepository = chatRepository;
    }
    async createUsers(users) {
        const newUserName = users.user_name;
        const sameUser = await this.userRepository.findOne({
            where: {
                user_name: newUserName,
            },
        });
        if (sameUser) {
            console.log('oldUser');
            return sameUser;
        }
        else {
            console.log('newUser');
            const newUser = await this.userRepository.create(users);
            const newNinjaRoom = new create_chat_dto_1.CreateRoomDto();
            newNinjaRoom.user_id = users.user_id;
            newNinjaRoom.room_id = (0, uuid_1.v4)();
            newNinjaRoom.room_name = 'Room Ninja';
            await this.roomRepository.create(newNinjaRoom);
            const newJoinRoom = new create_chat_dto_1.CreateRoomDto();
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
    async createRooms(newRoom) {
        const userId = newRoom.user_id;
        const roomName = ['Room1', 'Room2', 'Room3'];
        roomName.forEach((room) => {
            const newRoom = new create_chat_dto_1.CreateRoomDto();
            newRoom.user_id = userId;
            newRoom.room_id = (0, uuid_1.v4)();
            newRoom.room_name = room;
            return this.roomRepository.create(newRoom);
        });
    }
    async createJoinRooms(newRoom) {
        console.log(newRoom);
        const userId = newRoom.user_id;
        const newJoinRoom = new create_chat_dto_1.CreateRoomDto();
        newJoinRoom.user_id = userId;
        newJoinRoom.room_id = 'JoinRoomID';
        newJoinRoom.room_name = 'JoinRoom';
        return this.roomRepository.create(newJoinRoom);
    }
    findAllRooms(userId) {
        const userid = userId.user_id;
        return this.roomRepository.findAll({
            where: {
                user_id: userid,
            },
        });
    }
    async createChats(newChat) {
        const nowDate = new Date().toUTCString();
        const newChatObject = new create_chat_dto_1.CreateChat();
        newChatObject.chat_id = (0, uuid_1.v4)();
        newChatObject.room_id = newChat.room_id;
        newChatObject.created_by = newChat.create_by;
        newChatObject.created_at = nowDate;
        newChatObject.chat = newChat.chat;
        if (newChatObject.room_id !== 'JoinRoomID') {
            await this.chatRepository.create(newChatObject);
            const TRIVIA_URL = 'https://api.api-ninjas.com/v1/randomword';
            const headersRequest = {
                'X-Api-Key': 'Em/Yu9c5wmQGGBgIQE8m1Q==WfwVNwQxnm4QLCMT',
            };
            const response = await (0, axios_1.default)({
                method: 'GET',
                url: TRIVIA_URL,
                headers: headersRequest,
            }).catch(() => {
                throw new common_1.NotFoundException('API not available');
            });
            const nowDateNinja = new Date().toUTCString();
            const newChatNinja = new create_chat_dto_1.CreateChat();
            newChatNinja.chat_id = (0, uuid_1.v4)();
            newChatNinja.room_id = newChat.room_id;
            newChatNinja.created_by = "Ninja";
            newChatNinja.created_at = nowDateNinja;
            newChatNinja.chat = response.data?.word;
            return await this.chatRepository.create(newChatNinja);
        }
        else {
            return await this.chatRepository.create(newChatObject);
        }
    }
    findChatByRoom(roomId) {
        const userid = roomId.room_id;
        return this.chatRepository.findAll({
            where: {
                room_id: userid,
            },
        });
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(name_entity_1.Users)),
    __param(1, (0, sequelize_1.InjectModel)(rooms_entity_1.Users_rooms)),
    __param(2, (0, sequelize_1.InjectModel)(chats_entity_1.Users_chats)),
    __metadata("design:paramtypes", [Object, Object, Object])
], ChatService);
//# sourceMappingURL=chat.service.js.map