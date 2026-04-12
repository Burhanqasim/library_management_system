import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entity/books.entity';
import { CreateBookDto } from '../dto/create_book.dto';
import { Author } from 'src/author/entity/author.entity';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository : Repository<Book>,

        @InjectRepository(Author)
        private readonly authorRepository: Repository<Author>
    ){}

    // ✅ Create Book with Author
  async create(createBookDto: CreateBookDto): Promise<Book> {
    const { author_id, ...bookData } = createBookDto;

    const author = await this.authorRepository.findOne({
      where: { id: author_id },
    });

    if (!author) {
      throw new NotFoundException('Author not found');
    }

    const book = this.bookRepository.create({
      ...bookData,
      author,
    });

    return await this.bookRepository.save(book);
}

    async getAllBooks(){
        return this.bookRepository.find();
    }

   
    // ✅ Get Book with Author (same as above due to eager)
  async findAllWithAuthor(): Promise<Book[]> {
    return await this.bookRepository.find({
      relations: ['author'],
    });
  }
}
