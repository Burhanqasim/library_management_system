import {  BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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
        try {
            let author = this.authorRepository.create(authorDto);
            return await this.authorRepository.save(author);
        } catch (error) {
            throw new BadRequestException("Failed to craete an author");
        }
        
    }

    async allAuthor() : Promise<Author[]> {
            let allAuthor = await this.authorRepository.find();
            if(allAuthor.length === 0){
                throw new NotFoundException("Author not found");
            } else {
                return allAuthor;
            }      
    }

    async findAuthorById(id: number): Promise<Author>{
        const author_id = await this.authorRepository.findOne({where : {id}})
        if(!author_id) {
            throw new NotFoundException("Author is not found by this id");
        } else {
            return author_id;
        }
    }
}
