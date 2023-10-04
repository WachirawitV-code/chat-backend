export declare class CreateUserDto {
    user_id: string;
    user_name: string;
}
export declare class InsertUserDto {
    user_id: string;
}
export declare class InsertCreateUserDto {
    user_name: string;
}
export declare class CreateRoomDto {
    user_id: string;
    room_id: string;
    room_name: string;
}
export declare class InsertChat {
    room_id: string;
    create_by: string;
    chat: string;
}
export declare class CreateChat {
    chat_id: string;
    room_id: string;
    created_by: string;
    created_at: string;
    chat: string;
}
export declare class InsertFindChat {
    room_id: string;
}
