
import { Book } from "src/book/entity/books.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
    })
    name: string

    @CreateDateColumn()
    created_at : Date

    @OneToMany(()=> Book, (book)=> book.author)
    book: Book[];


}