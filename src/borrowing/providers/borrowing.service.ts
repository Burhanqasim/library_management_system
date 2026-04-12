import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Borrowing } from '../entity/borrowing.entity';
import { In, Repository } from 'typeorm';
import { Book } from 'src/book/entity/books.entity';
import { Member } from 'src/member/entity/member.entity';
import { CreateBorrowingDto } from '../dto/create_borrowing.dto';

@Injectable()
export class BorrowingService {
    constructor(
        @InjectRepository(Borrowing)
    private readonly borrowingRepository: Repository<Borrowing>,

    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,

    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
    ){}

     // ✅ Borrow a Book
  async create(dto: CreateBorrowingDto): Promise<Borrowing> {
    const { member_ids, book_id } = dto;

    // 🔍 Find Members
    const members = await this.memberRepository.find({
      where: { id: In(member_ids) },
    });

    if (members.length !== member_ids.length) {
      throw new NotFoundException('One or more members not found');
    }

    // 🔍 Find Book
    const book = await this.bookRepository.findOne({
      where: { id: book_id },
    });

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    // ✅ Create Borrowing
    const borrowing = this.borrowingRepository.create({
      members: members,
      book: book,
    });

    return await this.borrowingRepository.save(borrowing);
  }

   // ✅ Get All Borrowings
  async findAll(): Promise<Borrowing[]> {
    return await this.borrowingRepository.find();
  }

}
