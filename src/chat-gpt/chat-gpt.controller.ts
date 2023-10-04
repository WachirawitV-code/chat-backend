import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ChatGptService } from './chat-gpt.service';
import { GetChatCompletionAnswerInputDTO } from './model/chat-gpt-answer.dto'

@Controller('/chat-gpt')
export class ChatGptController {
  constructor(private readonly service: ChatGptService) {}

  @Post()
  getChatCompletionMessage(
    @Body(new ValidationPipe({ transform: true }))
    data: GetChatCompletionAnswerInputDTO,
  ) {
    return this.service.getAiModelAnswer(data);
  }
}
