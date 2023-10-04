import { Column, HasMany, HasOne, Model, Table } from 'sequelize-typescript';
import { Users_rooms } from './rooms.entity';

@Table({
  tableName: Users._tableName,
  updatedAt: false,
  createdAt: false,
})
export class Users extends Model<Users> {
  static _tableName = 'Users';
  static _user_id = 'user_id';
  static _user_name = 'user_name';

  @Column({
    field: Users._user_id,
    primaryKey: true,
  })
  user_id: string;

  @Column({
    field: Users._user_name,
  })
  user_name: string;

  @HasMany(() => Users_rooms, {
    foreignKey: 'user_id',
    sourceKey: 'user_id',
  })
  usageRooms: Users_rooms;
}
