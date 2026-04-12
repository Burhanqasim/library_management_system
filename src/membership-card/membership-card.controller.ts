import { Body, Controller, Post } from '@nestjs/common';
import { MembershipCardService } from './providers/membership-card.service';
import { CreateMembershipCardDto } from './dto/create_membership_card.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Membership_Card")
@Controller('membership-card')
export class MembershipCardController {
constructor(private readonly membershipCardSerivce: MembershipCardService){}
    @Post()
    @ApiOperation({ summary: "Create a new membership card" })
    @ApiResponse({ status: 201, description: "Membership card created successfully" })
    @ApiResponse({ status: 400, description: "Validation error" })
    async createMembershipCard(@Body() body: CreateMembershipCardDto){
        return await this.membershipCardSerivce.createMembershipCard(body)
    }
}
