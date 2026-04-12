import { Module } from '@nestjs/common';
import { MembershipCardController } from './membership-card.controller';
import { MembershipCardService } from './providers/membership-card.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembershipCard } from './entity/membership_card.entity';

@Module({
  controllers: [MembershipCardController],
  providers: [MembershipCardService],
  imports: [TypeOrmModule.forFeature([MembershipCard])],
  exports: [MembershipCardService],
})
export class MembershipCardModule {}
