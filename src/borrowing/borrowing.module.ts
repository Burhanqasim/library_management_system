import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Borrowing } from './entity/borrowing.entity';
import { BorrowingController } from './borrowing.controller';
import { Member } from 'src/member/entity/member.entity';
import { Book } from 'src/book/entity/books.entity';
import { BorrowingService } from './providers/borrowing.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Borrowing, Member, Book]),
  ],
  controllers: [BorrowingController],
  providers: [BorrowingService],
  exports: [TypeOrmModule],
})
export class BorrowingModule {

}
