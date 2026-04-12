import { Book } from "src/book/entity/books.entity";
import { Member } from "src/member/entity/member.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Borrowing {
    @PrimaryGeneratedColumn()
    id : number

    @ManyToMany(()=> Member, (member) => member.borrowing,{
        eager: true
    })
    @JoinTable()
    members: Member[]

    @ManyToOne(()=> Book, (book)=> book.borrowings, {
        eager: true
    })
    @JoinColumn()
    book: Book


}