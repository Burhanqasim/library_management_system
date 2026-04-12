import { IsArray, IsInt, ArrayNotEmpty } from "class-validator";

export class CreateBorrowingDto {

    @IsArray()
    @ArrayNotEmpty()
    @IsInt({ each: true })
    member_ids: number[];

    @IsInt()
    book_id: number;
}