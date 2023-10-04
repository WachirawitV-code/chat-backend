import { Model } from 'sequelize-typescript';
import { Users_rooms } from './rooms.entity';
export declare class Users extends Model<Users> {
    static _tableName: string;
    static _user_id: string;
    static _user_name: string;
    user_id: string;
    user_name: string;
    usageRooms: Users_rooms;
}
