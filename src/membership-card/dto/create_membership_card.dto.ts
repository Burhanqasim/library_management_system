import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { Member } from "src/member/entity/member.entity";

export class CreateMembershipCardDto {
    @IsNotEmpty()
    memberId : number
    
    @ApiProperty({ example: "CARD-12345" })
    @IsString()
    @IsNotEmpty()
    cardNumber: string;
}