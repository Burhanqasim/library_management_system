import { Injectable } from '@nestjs/common';
import { MembershipCard } from '../entity/membership_card.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CapacitorDriver } from 'typeorm/driver/capacitor/CapacitorDriver.js';
import { CreateMembershipCardDto } from '../dto/create_membership_card.dto';

@Injectable()
export class MembershipCardService {
    constructor(
        @InjectRepository(MembershipCard)
        private readonly membershipCardRepsitroy: Repository<MembershipCard>,
    ){}

    async createMembershipCard(membershipCard: CreateMembershipCardDto){
        let card = this.membershipCardRepsitroy.create(membershipCard)
        return await this.membershipCardRepsitroy.save(card)
    }

        async findUserById(id: number){
        return await this.membershipCardRepsitroy.findBy({id});   
    }

}
