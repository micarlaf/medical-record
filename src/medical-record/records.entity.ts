import { User } from "src/auth/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Record {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    patientname: string;
    @Column()
    consultationdate: string;
    @Column()
    weight: string;
    @Column()
    temperature: string;
    @Column()
    bloodpressure: string;
    @Column() 
    conduct: string;
    @Column()
    diagnosis: string;

    priority

    @ManyToOne(type => User, user => user.records, {eager: false})
    user: User;

    @Column({nullable: true})
    finishedAt: Date;
}