
import { User } from '../Models/user';

export class UserService {
  constructor() { }
  users:User[] = [
    new User('Steve Smith', 'Male', 'Monthly', 'Active'),
    new User('Mery Jane', 'Female', 'Yearly', 'Inactive'),
    new User('Mark Tyler', 'Male', 'Quaterly', 'Active')
  ]

  getAllUser(){
    return this.users
  }

 createUser(name:string, gender:string, subType:string, status:string){
let user = new User(name,gender,subType,status)
this.users.push(user)
 }
}


