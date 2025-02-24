import {IsEmail, IsString} from "class-validator";

export class User {
    @IsString()
    id : string;

    @IsString()
    name: string;

    @IsEmail()
    email : string;

    @IsString()
    password: string;

    constructor(id:string, name: string, email: string, password: string) {
        this.id= id;
        this.name= name;
        this.email= email;
        this.password = password;
    }
}