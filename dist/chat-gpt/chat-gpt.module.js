"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGptModule = void 0;
const common_1 = require("@nestjs/common");
const chat_gpt_service_1 = require("./chat-gpt.service");
const chat_gpt_controller_1 = require("./chat-gpt.controller");
let ChatGptModule = class ChatGptModule {
};
exports.ChatGptModule = ChatGptModule;
exports.ChatGptModule = ChatGptModule = __decorate([
    (0, common_1.Module)({
        providers: [chat_gpt_service_1.ChatGptService],
        controllers: [chat_gpt_controller_1.ChatGptController]
    })
], ChatGptModule);
//# sourceMappingURL=chat-gpt.module.js.map