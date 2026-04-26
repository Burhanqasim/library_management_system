import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Member } from "../entity/member.entity";
import { Any, ObjectLiteral, Repository } from "typeorm";
import { MemberDto } from "../dto/create_member.dto";
import { MembershipCard } from "src/membership-card/entity/membership_card.entity";
import { MembershipCardService } from "src/membership-card/providers/membership-card.service";
import { GetMemberDto } from "../dto/get_member.dto";
import e from "express";
import { PaginationProvider } from "src/common/pagination/provider/pagination.provider";
import { Paginated } from "src/common/pagination/interface/paginated.interface";

@Injectable()
export class MemberService {
    constructor(
        private readonly membershipCardServices : MembershipCardService,
        private readonly paginationProvider: PaginationProvider<Member>,
        @InjectRepository(Member)
        private readonly memberRepository : Repository<Member>, 

        @InjectRepository(MembershipCard)
        private readonly membershipCardRepository : Repository<MembershipCard>
    ) {}

    // Create Post 
    async create(data : Partial<Member>){
        let member = this.memberRepository.create(data)
        return await this.memberRepository.save(member)
    }


    // find member by using get
    async allmember(getMemberDto :GetMemberDto):Promise<Paginated<Member>>{
        return this.paginationProvider.paginateQuery({
            limit: getMemberDto.limit,
            page: getMemberDto.limit
        }, this.memberRepository);
    }

    async findoneMember(id: number): Promise<Member> {
        return await this.memberRepository.findOne({where: {id}})
    }



}