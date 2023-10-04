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
exports.ChatGptService = void 0;
const common_1 = require("@nestjs/common");
const chat_history_manager_1 = require("./model/chat-history-manager");
const openai_1 = require("langchain/chat_models/openai");
const chat_gpt_answer_dto_1 = require("./model/chat-gpt-answer.dto");
const DEFAULT_TEMPERATURE = 1;
const DEFAULT_MODEL = 'gpt-3.5-turbo';
let ChatGptService = class ChatGptService {
    constructor() {
        this.chatHistory = new chat_history_manager_1.ChatHistoryManager();
        this.chat = new openai_1.ChatOpenAI({
            temperature: DEFAULT_TEMPERATURE,
            openAIApiKey: process.env.OPENAI_API_KEY,
            modelName: DEFAULT_MODEL,
        });
    }
    async getAiModelAnswer(data) {
        this.chatHistory.addHumanMessage(data.message);
        const result = await this.chat.predictMessages(this.chatHistory.chatHistory);
        const aiMessage = result.content;
        this.chatHistory.addAiMessage(aiMessage);
        return chat_gpt_answer_dto_1.GetChatCompletionAnswerOutputDTO.getInstance(aiMessage);
    }
};
exports.ChatGptService = ChatGptService;
exports.ChatGptService = ChatGptService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ChatGptService);
//# sourceMappingURL=chat-gpt.service.js.map