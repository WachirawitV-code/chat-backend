import { Model } from 'sequelize-typescript';
export declare class Users_chats extends Model<Users_chats> {
    static _tableName: string;
    static _chat_id: string;
    static _room_id: string;
    static _created_by: string;
    static _created_at: string;
    static _chat: string;
    chat_id: string;
    room_id: string;
    created_by: string;
    created_at: string;
    chat: string;
}
