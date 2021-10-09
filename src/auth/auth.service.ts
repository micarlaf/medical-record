import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CredentialsDTO } from './dtos/credentials.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsersRepository) private usersRepository : UsersRepository,
        private jwtService: JwtService
    ){}

    async signUp(credentialsDTO: CredentialsDTO){
        return this.usersRepository.createUser(credentialsDTO);
    }

    async signIn(credentialsDTO: CredentialsDTO) : Promise<{accessToken: string}>{
        const {cpf, password} = credentialsDTO;
        const user = await this.usersRepository.findOne({cpf});
        
        if(user && (await bcrypt.compare(password, user.password))) {
            const payload = {cpf}
            const accessToken :string = this.jwtService.sign(payload)
            return {accessToken};
        } else {
            throw new UnauthorizedException("Usuário não autorizado.")
        }
   
   
    }

}
