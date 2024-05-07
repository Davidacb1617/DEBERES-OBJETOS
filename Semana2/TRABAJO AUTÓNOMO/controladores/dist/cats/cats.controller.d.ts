import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    getAllCats(color: 'black' | 'white' | 'brown'): {
        id: number;
        name: string;
        age: number;
        color: string;
    }[];
    getCatById(id: string): {
        id: number;
        name: string;
        age: number;
        color: string;
    };
    createCat(createCatDto: CreateCatDto): {
        id: number;
        name: string;
        age: number;
        color: "black" | "white" | "brown";
    };
    updateCat(id: string, updateCatDto: UpdateCatDto): {
        id: number;
        name: string;
        age: number;
        color: string;
    };
    removeCat(id: string): {
        id: number;
        name: string;
        age: number;
        color: string;
    };
}
