import { ILoginRes } from "src/app/interfaces/authentication/ilogin-res";

export class LoginRes implements ILoginRes {
    accessToken!: string;
    email!: string;
    id!: number;
    roles!: string[];
    tokenType!: string;
    username!: string;
}
