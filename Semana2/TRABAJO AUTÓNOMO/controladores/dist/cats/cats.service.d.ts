import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
export declare class CatsService {
    private cats;
    getCats(color?: 'black' | 'white' | 'brown'): {
        id: number;
        name: string;
        age: number;
        color: string;
    }[];
    getCat(id: number): {
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
    updateCat(id: number, updateCatDto: UpdateCatDto): {
        id: number;
        name: string;
        age: number;
        color: string;
    };
    removeCat(id: number): {
        id: number;
        name: string;
        age: number;
        color: string;
    };
}
