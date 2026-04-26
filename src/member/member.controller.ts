import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MemberService } from './providers/member.service';
import { stringify } from 'querystring';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetMemberDto } from './dto/get_member.dto';

@ApiTags('Members')
@Controller('member')
export class MemberController {
    constructor(private readonly memberService: MemberService){}
    @Get(":id")
    getMemberById(@Param("id")id: string){
        return this.memberService.findoneMember(parseInt(id));
    }

    @Get()
    getallmember(@Query() getMemberDto : GetMemberDto){
        return this.memberService.allmember(getMemberDto);
    }

    @Post()
    @ApiOperation({ summary: "Create a new member" })
    @ApiResponse({ status: 201, description: "Member created successfully" })
    @ApiResponse({ status: 400, description: "Validation error" })
    createMember(@Body() body){
        return this.memberService.create(body);
    }



}
