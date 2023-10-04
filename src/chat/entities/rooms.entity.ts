import { Column, HasMany, HasOne, Model, Table } from 'sequelize-typescript';
import { Users_chats } from './chats.entity';

@Table({
  tableName: Users_rooms._tableName,
  updatedAt: false,
  createdAt: false,
})
export class Users_rooms extends Model<Users_rooms> {
  static _tableName = 'Users_rooms';
  static _user_id = 'user_id';
  static _room_id = 'room_id';
  static _room_name = 'room_name';

  @Column({
    field: Users_rooms._user_id,
    primaryKey: true,
  })
  user_id: string;

  @Column({
    field: Users_rooms._room_id,
    primaryKey: true,
  })
  room_id: string;

  @Column({
    field: Users_rooms._room_name,
  })
  room_name: string;

  @HasMany(() => Users_chats, {
    foreignKey: 'room_id',
    sourceKey: 'room_id',
  })
  usageChats: Users_chats;
}
