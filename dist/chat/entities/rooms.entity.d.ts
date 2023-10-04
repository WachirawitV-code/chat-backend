import { Model } from 'sequelize-typescript';
import { Users_chats } from './chats.entity';
export declare class Users_rooms extends Model<Users_rooms> {
    static _tableName: string;
    static _user_id: string;
    static _room_id: string;
    static _room_name: string;
    user_id: string;
    room_id: string;
    room_name: string;
    usageChats: Users_chats;
}
