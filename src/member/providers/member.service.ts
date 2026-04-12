import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Member } from "../entity/member.entity";
import { Any, Repository } from "typeorm";
import { MemberDto } from "../dto/create_member.dto";
import { MembershipCard } from "src/membership-card/entity/membership_card.entity";
import { MembershipCardService } from "src/membership-card/providers/membership-card.service";

@Injectable()
export class MemberService {
    constructor(
        private readonly membershipCardServices : MembershipCardService,
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
    async allmember(): Promise<Member[]>{
        return await this.memberRepository.find({relations: ['membershipCard']});
    }

    async findoneMember(id: number): Promise<Member> {
        return await this.memberRepository.findOne({where: {id}, relations: ['membershipCard']})
    }



}