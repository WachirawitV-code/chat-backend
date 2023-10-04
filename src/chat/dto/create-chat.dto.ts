import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export class CreateUserDto {
  user_id: string;
  user_name: string;
}

export class InsertUserDto {
  user_id: string;
}

export class InsertCreateUserDto {
  user_name: string;
}

export class CreateRoomDto {
  user_id: string;
  room_id: string;
  room_name: string;
}

export class InsertChat {
  room_id: string;
  create_by: string;
  chat: string;
}

export class CreateChat {
  chat_id: string;
  room_id: string;
  created_by: string;
  created_at: string;
  chat: string;
}

export class InsertFindChat {
  room_id: string;
}