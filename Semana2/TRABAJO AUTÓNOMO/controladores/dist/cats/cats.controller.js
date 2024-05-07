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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsController = void 0;
const cats_service_1 = require("./cats.service");
const common_1 = require("@nestjs/common");
const create_cat_dto_1 = require("./dto/create-cat.dto");
const update_cat_dto_1 = require("./dto/update-cat.dto");
let CatsController = class CatsController {
    constructor(catsService) {
        this.catsService = catsService;
    }
    getAllCats(color) {
        return this.catsService.getCats(color);
    }
    getCatById(id) {
        return this.catsService.getCat(+id);
    }
    createCat(createCatDto) {
        return this.catsService.createCat(createCatDto);
    }
    updateCat(id, updateCatDto) {
        return this.catsService.updateCat(+id, updateCatDto);
    }
    removeCat(id) {
        return this.catsService.removeCat(+id);
    }
};
exports.CatsController = CatsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('color')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "getAllCats", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "getCatById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cat_dto_1.CreateCatDto]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "createCat", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cat_dto_1.UpdateCatDto]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "updateCat", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "removeCat", null);
exports.CatsController = CatsController = __decorate([
    (0, common_1.Controller)('cats'),
    __metadata("design:paramtypes", [cats_service_1.CatsService])
], CatsController);
//# sourceMappingURL=cats.controller.js.map