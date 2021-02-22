import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, } from "typeorm";
import { Citizen } from "src/student-registration/citizen/entities/citizen.entity";
@Entity()
export class person {



    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    BVN: number;
    @Column({ nullable: true })
    NIN: number;

    @Column()
    Mobilenumber: number;

    @JoinColumn()
    @OneToOne(type => Citizen, citizen => citizen.person, { cascade: true })
    citizen: Citizen;

}