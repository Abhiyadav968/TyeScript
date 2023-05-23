import { Iuser } from "../Models/Iuser";

export class UserService {
    private static users: Iuser[] = [
        { SNO: 1, Name: 'Abhishek yadav', Age: 18, },
        { SNO: 2, Name: 'Abhishek ray', Age: 20, },
        { SNO: 3, Name: 'Abhi raj', Age: 16, }
    ]

    public static getAllUsers(){
        return this.users
    }
}