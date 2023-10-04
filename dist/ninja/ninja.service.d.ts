import { GetAnswerNinja } from './model/ninja-answer';
export declare class NinjaService {
    private readonly httpService;
    ninjaAnswer: GetAnswerNinja[];
    getAnswer(): Promise<{
        word: any;
    }>;
}
