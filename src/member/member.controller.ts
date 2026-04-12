import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MemberService } from './providers/member.service';
import { stringify } from 'querystring';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('member')
export class MemberController {
    constructor(private readonly memberService: MemberService){}
    @Get(":id")
    getMemberById(@Param("id")id: string){
        return this.memberService.findoneMember(parseInt(id));
    }

    @Get()
    getallmember(){
        return this.memberService.allmember();
    }

    @Post()
    @ApiOperation({ summary: "Create a new member" })
    @ApiResponse({ status: 201, description: "Member created successfully" })
    @ApiResponse({ status: 400, description: "Validation error" })
    createMember(@Body() body){
        return this.memberService.create(body);
    }



}
