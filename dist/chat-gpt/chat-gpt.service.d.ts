import { GetChatCompletionAnswerInputDTO, GetChatCompletionAnswerOutputDTO } from './model/chat-gpt-answer.dto';
export declare class ChatGptService {
    private readonly chatHistory;
    private readonly chat;
    constructor();
    getAiModelAnswer(data: GetChatCompletionAnswerInputDTO): Promise<GetChatCompletionAnswerOutputDTO>;
}
