import { Member } from "src/member/entity/member.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MembershipCard {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        nullable: false,
        length: 50
    })
    cardNumber: string

    @CreateDateColumn()
    createdAt: Date

    @OneToOne(()=> Member, (member)=> member.membershipCard)
    member? : Member
}