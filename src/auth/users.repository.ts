import { ConflictException } from "@nestjs/common";
import { StringifyOptions } from "querystring";
import { EntityRepository, Repository } from "typeorm";
import { CredentialsDTO } from "./dtos/credentials.dto";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';
@EntityRepository(User)
export class UsersRepository extends Repository<User>{

    async createUser(credentialsDTO: CredentialsDTO){
        const {cpf, usertype, password } = credentialsDTO;

        const salt = await bcrypt.genSalt();
        const hashedPass : string = await bcrypt.hash(password, salt);

        const user = this.create({cpf, usertype, password: hashedPass});
        try {
            await this.save(user);
        } catch (error) {
            if(error.code == '23505') {
                throw new ConflictException('Usuário já existe');
            } else {
                throw error;
            }
        }
    }
}