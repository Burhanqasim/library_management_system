import { Author } from "src/author/entity/author.entity";
import { Borrowing } from "src/borrowing/entity/borrowing.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        length: 100,
        nullable: false
    })
    name: string

    @Column({
        type: "int",
        nullable: false
    })
    published_year: number

    @ManyToOne(()=> Author, (author)=> author.book, {
        eager: true
    })
    @JoinColumn({name: "author_id"})
    author: Author

    @OneToMany(()=> Borrowing, (borrowing)=> borrowing.book)
    borrowings: Borrowing[]
}