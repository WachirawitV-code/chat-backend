import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-chat.dto';

export class UpdateChatDto extends PartialType(CreateUserDto) {}
