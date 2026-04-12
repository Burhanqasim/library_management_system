import { Borrowing } from "src/borrowing/entity/borrowing.entity";
import { MembershipCard } from "src/membership-card/entity/membership_card.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Member {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        nullable : false,
        length : 50,
    })
    name: string

    @Column({
        type: "varchar",
        nullable: false,
        length: 100
    })
    email: string

    @CreateDateColumn()
    createdAt: Date

    @OneToOne(()=> MembershipCard, (membershipCard)=> membershipCard.member,{
        cascade: true,
        eager: true
    })
    @JoinColumn()
    membershipCard: MembershipCard

    @ManyToMany(()=> Borrowing, (borrowing)=> borrowing.members)
    borrowing: Borrowing[]
}