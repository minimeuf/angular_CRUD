import { ILogin } from "src/app/interfaces/authentication/ilogin";

export class Login implements ILogin {
    username!: string;
    password!: string;
    constructor(username: string, password: string){
        username = username;
        password = password;
    }
}
