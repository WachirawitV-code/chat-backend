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
exports.Users = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const rooms_entity_1 = require("./rooms.entity");
let Users = class Users extends sequelize_typescript_1.Model {
};
exports.Users = Users;
Users._tableName = 'Users';
Users._user_id = 'user_id';
Users._user_name = 'user_name';
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: Users._user_id,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], Users.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: Users._user_name,
    }),
    __metadata("design:type", String)
], Users.prototype, "user_name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => rooms_entity_1.Users_rooms, {
        foreignKey: 'user_id',
        sourceKey: 'user_id',
    }),
    __metadata("design:type", rooms_entity_1.Users_rooms)
], Users.prototype, "usageRooms", void 0);
exports.Users = Users = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: Users._tableName,
        updatedAt: false,
        createdAt: false,
    })
], Users);
//# sourceMappingURL=name.entity.js.map