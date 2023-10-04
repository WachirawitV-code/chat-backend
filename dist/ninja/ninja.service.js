"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NinjaService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let NinjaService = class NinjaService {
    constructor() {
        this.ninjaAnswer = [];
    }
    async getAnswer() {
        const TRIVIA_URL = 'https://api.api-ninjas.com/v1/randomword';
        const headersRequest = {
            'X-Api-Key': 'Em/Yu9c5wmQGGBgIQE8m1Q==WfwVNwQxnm4QLCMT',
        };
        const response = await (0, axios_1.default)({
            method: 'GET',
            url: TRIVIA_URL,
            headers: headersRequest,
        }).catch(() => {
            throw new common_1.NotFoundException('API not available');
        });
        return {
            word: response.data?.word,
        };
    }
};
exports.NinjaService = NinjaService;
exports.NinjaService = NinjaService = __decorate([
    (0, common_1.Injectable)()
], NinjaService);
//# sourceMappingURL=ninja.service.js.map