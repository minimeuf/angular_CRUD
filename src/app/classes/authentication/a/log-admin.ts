import { ILogin } from "src/app/interfaces/authentication/ilogin";
export class LogAdmin implements ILogin{
    username: string = 'admin';
    password: string = '111111';
}
