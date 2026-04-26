import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateAuthorDto {
    @ApiProperty()
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    @IsNotEmpty()
    name: string

    // after api error i updated this 
    // @IsInt()
    // published_year: number;

    // @IsInt()
    // author_id: number;

    
}