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
exports.Users_rooms = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const chats_entity_1 = require("./chats.entity");
let Users_rooms = class Users_rooms extends sequelize_typescript_1.Model {
};
exports.Users_rooms = Users_rooms;
Users_rooms._tableName = 'Users_rooms';
Users_rooms._user_id = 'user_id';
Users_rooms._room_id = 'room_id';
Users_rooms._room_name = 'room_name';
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: Users_rooms._user_id,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], Users_rooms.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: Users_rooms._room_id,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], Users_rooms.prototype, "room_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: Users_rooms._room_name,
    }),
    __metadata("design:type", String)
], Users_rooms.prototype, "room_name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => chats_entity_1.Users_chats, {
        foreignKey: 'room_id',
        sourceKey: 'room_id',
    }),
    __metadata("design:type", chats_entity_1.Users_chats)
], Users_rooms.prototype, "usageChats", void 0);
exports.Users_rooms = Users_rooms = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: Users_rooms._tableName,
        updatedAt: false,
        createdAt: false,
    })
], Users_rooms);
//# sourceMappingURL=rooms.entity.js.map