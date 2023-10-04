import { NinjaService } from './ninja.service';
export declare class NinjaController {
    private ninjaService;
    constructor(ninjaService: NinjaService);
    getNinja(): Promise<{
        word: any;
    }>;
}
