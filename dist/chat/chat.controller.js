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
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("./chat.service");
const create_chat_dto_1 = require("./dto/create-chat.dto");
const uuid_1 = require("uuid");
let ChatController = class ChatController {
    constructor(chatService) {
        this.chatService = chatService;
    }
    async createUser(user_name) {
        const user = new create_chat_dto_1.CreateUserDto();
        user.user_id = (0, uuid_1.v4)();
        user.user_name = user_name.user_name;
        return await this.chatService.createUsers(user);
    }
    findAll() {
        return this.chatService.findAll();
    }
    createRoom(roomInsertDto) {
        const room = new create_chat_dto_1.InsertUserDto();
        room.user_id = roomInsertDto.user_id;
        return this.chatService.createRooms(room);
    }
    createJoinRoom(roomInsertDto) {
        const room = new create_chat_dto_1.InsertUserDto();
        room.user_id = roomInsertDto.user_id;
        return this.chatService.createJoinRooms(room);
    }
    findAllRoom(insertUser) {
        const userId = new create_chat_dto_1.InsertUserDto();
        userId.user_id = insertUser.user_id;
        return this.chatService.findAllRooms(userId);
    }
    createChat(insertChat) {
        const chat = new create_chat_dto_1.InsertChat();
        chat.room_id = insertChat.room_id;
        chat.create_by = insertChat.create_by;
        chat.chat = insertChat.chat;
        return this.chatService.createChats(chat);
    }
    findAllChat(room_id) {
        const roomId = new create_chat_dto_1.InsertFindChat();
        roomId.room_id = room_id.room_id;
        return this.chatService.findChatByRoom(roomId);
    }
};
exports.ChatController = ChatController;
__decorate([
    (0, common_1.Post)('user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chat_dto_1.InsertCreateUserDto]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)('user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('room'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chat_dto_1.InsertUserDto]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "createRoom", null);
__decorate([
    (0, common_1.Post)('joinroom'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chat_dto_1.InsertUserDto]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "createJoinRoom", null);
__decorate([
    (0, common_1.Get)('room'),
    __param(0, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chat_dto_1.InsertUserDto]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "findAllRoom", null);
__decorate([
    (0, common_1.Post)('addchat'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chat_dto_1.InsertChat]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "createChat", null);
__decorate([
    (0, common_1.Get)('getchat'),
    __param(0, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chat_dto_1.InsertFindChat]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "findAllChat", null);
exports.ChatController = ChatController = __decorate([
    (0, common_1.Controller)('chat'),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatController);
//# sourceMappingURL=chat.controller.js.map