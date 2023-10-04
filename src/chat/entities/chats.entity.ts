import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: Users_chats._tableName,
  updatedAt: false,
  createdAt: false,
})
export class Users_chats extends Model<Users_chats> {
  static _tableName = 'Users_chats';
  static _chat_id = 'chat_id';
  static _room_id = 'room_id';
  static _created_by = 'created_by';
  static _created_at = 'created_at';
  static _chat = 'chat';

  @Column({
    field: Users_chats._chat_id,
    primaryKey: true,
  })
  chat_id: string;

  @Column({
    field: Users_chats._room_id,
  })
  room_id: string;

  @Column({
    field: Users_chats._created_by,
  })
  created_by: string;

  @Column({
    field: Users_chats._created_at,
  })
  created_at: string;

  @Column({
    field: Users_chats._chat,
  })
  chat: string;
}
