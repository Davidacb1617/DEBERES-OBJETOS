"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
let CatsService = class CatsService {
    constructor() {
        this.cats = [
            { id: 1, name: 'Cat 1', age: 2, color: 'black' },
            { id: 2, name: 'Cat 2', age: 1, color: 'white' },
            { id: 3, name: 'Cat 3', age: 5, color: 'brown' },
        ];
    }
    getCats(color) {
        if (color) {
            return this.cats.filter((cat) => cat.color === color);
        }
        return this.cats;
    }
    getCat(id) {
        const cat = this.cats.find((cat) => cat.id === id);
        if (!cat) {
            throw new Error('Cat not Found');
        }
        return cat;
    }
    createCat(createCatDto) {
        const newCat = {
            ...createCatDto,
            id: Date.now(),
        };
        this.cats.push(newCat);
        return newCat;
    }
    updateCat(id, updateCatDto) {
        this.cats = this.cats.map((cat) => {
            if (cat.id === id) {
                return { ...cat, ...updateCatDto };
            }
            return cat;
        });
        return this.getCat(id);
    }
    removeCat(id) {
        const toBeRemoved = this.getCat(id);
        this.cats = this.cats.filter((cat) => cat.id !== id);
        return toBeRemoved;
    }
};
exports.CatsService = CatsService;
exports.CatsService = CatsService = __decorate([
    (0, common_1.Injectable)()
], CatsService);
//# sourceMappingURL=cats.service.js.map