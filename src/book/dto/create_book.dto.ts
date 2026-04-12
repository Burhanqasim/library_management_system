import { IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateBookDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;

    @IsInt()
    @IsNotEmpty()
    published_year: number;

    @IsInt()
    @IsNotEmpty()
    author_id: number; // used to link Author
}