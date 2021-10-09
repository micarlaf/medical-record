import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CredentialsDTO {
    @IsString() 
    @MinLength(14)
    @MaxLength(14)
    cpf: string;
    
    @IsString() 
    @MinLength(3)
    @MaxLength(15)
    usertype: string;
    
    @IsString()
    @MinLength(8)
    @MaxLength(25)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)    
    password: string;

    

}