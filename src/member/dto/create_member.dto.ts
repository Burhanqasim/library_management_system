import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEmail, IsIn, IsInt, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateMembershipCardDto } from "src/membership-card/dto/create_membership_card.dto";


export class MemberDto {
    @ApiProperty({
        required: true,
        type: "string",
        description: "Full name of the member",
        example: "Burhan Qasim"
    })
    @IsString()
    @IsNotEmpty()
    name: string;  

    @ApiProperty({
        required: true,
        type: "string",
        description: "Valid email address of the member",
        example: "burhanqasim@gmail.com"
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ 
        required : false,
        type: "object",
        example: {
    "name": "Ali Khan",
    "email": "ali@gmail.com",
    "membershipCard": {
        type: "json",
          description: "The value can be any Json for your membershipcard",
          example: { "cardNumber": "CARD-123"}
  }
}
     })
    @ValidateNested()
    @IsOptional()
    @Type(() => CreateMembershipCardDto)
    membershipCard?: CreateMembershipCardDto | null;


//     @ApiProperty({
//     type: "integer",
//     required: true,
//     description: `
// Author ID reference.

// ⚠️ NOTE:
// - This field is NOT required for member creation logically.
// - It seems incorrectly added here (belongs to Book, not Member).

// 👉 You should REMOVE this field unless you have a special use-case.
//     `,
//     example: 1,
//   })
//   @IsNotEmpty()
//   @IsInt()
//   authorId: number

}