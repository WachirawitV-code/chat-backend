import { ChatService } from './chat.service';
import { InsertUserDto, InsertChat, InsertFindChat, InsertCreateUserDto } from './dto/create-chat.dto';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    createUser(user_name: InsertCreateUserDto): Promise<import("./entities/name.entity").Users>;
    findAll(): Promise<import("./entities/name.entity").Users[]>;
    createRoom(roomInsertDto: InsertUserDto): Promise<void>;
    createJoinRoom(roomInsertDto: InsertUserDto): Promise<import("./entities/rooms.entity").Users_rooms>;
    findAllRoom(insertUser: InsertUserDto): Promise<import("./entities/rooms.entity").Users_rooms[]>;
    createChat(insertChat: InsertChat): Promise<import("./entities/chats.entity").Users_chats>;
    findAllChat(room_id: InsertFindChat): Promise<import("./entities/chats.entity").Users_chats[]>;
}
