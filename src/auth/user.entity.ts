import { Record } from "src/medical-record/records.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique: true})
    cpf: string;    
    @Column()
    usertype: string;
    @Column()
    password: string;

    @OneToMany(type => Record, record=> record.user, {eager: true})
    records: Record[];
}