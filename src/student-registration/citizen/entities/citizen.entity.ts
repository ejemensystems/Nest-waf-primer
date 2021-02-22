import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import { person } from "../../person/entities/person.entity"

@Entity()
export class Citizen {



    @PrimaryGeneratedColumn()
     id: number;

    @Column() 
    firstName: string;
    @Column({ nullable: true }) 
    middleName: string;

    @Column() 
    lastName: string;

    @Column() 
    nationality: string;

    @Column({ nullable: true })
    countryofbirth: string;

    @Column({ nullable: true })
     stateofbirth: string

    @Column({ nullable: true }) 
     townofbirth: string

    @Column({ default: true }) 
    adress: boolean;

    @Column({ default: true }) 
    profession: boolean;

    @Column({ default: true }) 
    isActive: boolean;
    

    
    @OneToOne(type => person, person=> person.citizen)
    person: person;
}

