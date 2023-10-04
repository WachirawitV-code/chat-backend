import { ChatGptService } from './chat-gpt.service';
import { GetChatCompletionAnswerInputDTO } from './model/chat-gpt-answer.dto';
export declare class ChatGptController {
    private readonly service;
    constructor(service: ChatGptService);
    getChatCompletionMessage(data: GetChatCompletionAnswerInputDTO): Promise<import("./model/chat-gpt-answer.dto").GetChatCompletionAnswerOutputDTO>;
}
