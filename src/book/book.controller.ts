import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './providers/book.service';
import { CreateBookDto } from './dto/create_book.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Book")
@Controller('book')
export class BookController {
    constructor(
        private readonly bookService: BookService
    ){}

    @Post()
    @ApiOperation({ summary: "Create a new book" })
    @ApiResponse({ status: 201, description: "Book created successfully" })
    @ApiResponse({ status: 400, description: "Validation error" })
    createBook(@Body() bookDto: CreateBookDto){
        return this.bookService.create(bookDto);
    }

    @Get()
    getAllBooks(){
        return this.bookService.getAllBooks();
    }

    // ✅ Get Books with Author
  @Get('with-author')
  findWithAuthor() {
    return this.bookService.findAllWithAuthor();
  }
}


