import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './providers/book.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entity/books.entity';
import { Author } from 'src/author/entity/author.entity';
import { AuthorModule } from 'src/author/author.module';
import { BorrowingModule } from 'src/borrowing/borrowing.module';

@Module({
  controllers: [BookController],
  providers: [BookService],
  imports: [
    TypeOrmModule.forFeature([Book, Author]),
    AuthorModule,
    BorrowingModule
],
})
export class BookModule {}
