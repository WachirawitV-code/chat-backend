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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users_chats = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Users_chats = class Users_chats extends sequelize_typescript_1.Model {
};
exports.Users_chats = Users_chats;
Users_chats._tableName = 'Users_chats';
Users_chats._chat_id = 'chat_id';
Users_chats._room_id = 'room_id';
Users_chats._created_by = 'created_by';
Users_chats._created_at = 'created_at';
Users_chats._chat = 'chat';
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: Users_chats._chat_id,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], Users_chats.prototype, "chat_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: Users_chats._room_id,
    }),
    __metadata("design:type", String)
], Users_chats.prototype, "room_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: Users_chats._created_by,
    }),
    __metadata("design:type", String)
], Users_chats.prototype, "created_by", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: Users_chats._created_at,
    }),
    __metadata("design:type", String)
], Users_chats.prototype, "created_at", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: Users_chats._chat,
    }),
    __metadata("design:type", String)
], Users_chats.prototype, "chat", void 0);
exports.Users_chats = Users_chats = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: Users_chats._tableName,
        updatedAt: false,
        createdAt: false,
    })
], Users_chats);
//# sourceMappingURL=chats.entity.js.map