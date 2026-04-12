import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AuthorService } from './providers/author.service';
import { CreateAuthorDto } from './dto/create_author.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Author")
@Controller('author')
export class AuthorController {
    constructor(private readonly authorService: AuthorService){}

    @Post()
    @ApiOperation({ summary: "Create a new Author" })
    @ApiResponse({ status: 201, description: "Author created successfully" })
    @ApiResponse({ status: 400, description: "Validation error" })
    createAuthor(@Body() authorDto: CreateAuthorDto){
        return this.authorService.createAuthor(authorDto);
    }

    @Get()
    getAllAuthor(authorDto : CreateAuthorDto){
        return this.authorService.allAuthor();
    }

    @Get(":id")
    getAuthorById(@Param("id") id: string){
        return this.authorService.findAuthorById(parseInt(id));
    }
}
