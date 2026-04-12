import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from '../entity/author.entity';
import { CreateAuthorDto } from '../dto/create_author.dto';

@Injectable()
export class AuthorService {
    constructor(
        @InjectRepository(Author)
        private readonly authorRepository : Repository<Author> 
    ){}

    async createAuthor(authorDto: CreateAuthorDto ): Promise<Author>{
        let author = this.authorRepository.create(authorDto);
        return await this.authorRepository.save(author);
    }

    async allAuthor() : Promise<Author[]> {
        return this.authorRepository.find();
    }

    async findAuthorById(id: number): Promise<Author>{
        return await this.authorRepository.findOne({where : {id}})
    }
}
