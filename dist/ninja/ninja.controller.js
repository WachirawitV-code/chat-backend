"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NinjaController = void 0;
const common_1 = require("@nestjs/common");
const ninja_service_1 = require("./ninja.service");
let NinjaController = class NinjaController {
    constructor(ninjaService) {
        this.ninjaService = ninjaService;
    }
    getNinja() {
        return this.ninjaService.getAnswer();
    }
};
exports.NinjaController = NinjaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NinjaController.prototype, "getNinja", null);
exports.NinjaController = NinjaController = __decorate([
    (0, common_1.Controller)('ninja'),
    __metadata("design:paramtypes", [ninja_service_1.NinjaService])
], NinjaController);
//# sourceMappingURL=ninja.controller.js.map