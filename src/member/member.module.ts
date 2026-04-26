import { Module } from '@nestjs/common';
import { MemberController } from './member.controller';
import { MemberService } from './providers/member.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './entity/member.entity';
import { MembershipCardModule } from 'src/membership-card/membership-card.module';
import { MembershipCard } from 'src/membership-card/entity/membership_card.entity';
import { BorrowingModule } from 'src/borrowing/borrowing.module';
import { PaginationModule } from 'src/common/pagination/pagination.module';

@Module({
  controllers: [MemberController],
  providers: [MemberService],
  imports : [
    TypeOrmModule.forFeature([Member, MembershipCard]), 
  MembershipCardModule, 
  BorrowingModule,
  PaginationModule,
]
})
export class MemberModule {}
