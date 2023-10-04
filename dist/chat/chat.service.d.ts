import { InsertUserDto, CreateUserDto, InsertChat, InsertFindChat } from './dto/create-chat.dto';
import { Users } from './entities/name.entity';
import { Users_rooms } from './entities/rooms.entity';
import { Users_chats } from './entities/chats.entity';
export declare class ChatService {
    private userRepository;
    private roomRepository;
    private chatRepository;
    constructor(userRepository: typeof Users, roomRepository: typeof Users_rooms, chatRepository: typeof Users_chats);
    createUsers(users: CreateUserDto): Promise<Users>;
    findAll(): Promise<Users[]>;
    createRooms(newRoom: InsertUserDto): Promise<void>;
    createJoinRooms(newRoom: InsertUserDto): Promise<Users_rooms>;
    findAllRooms(userId: InsertUserDto): Promise<Users_rooms[]>;
    createChats(newChat: InsertChat): Promise<Users_chats>;
    findChatByRoom(roomId: InsertFindChat): Promise<Users_chats[]>;
}
