import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from '../../../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [UserListComponent, FormsModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  providers:[UserService]
})
export class AdminComponent {
constructor(private userService:UserService){}

name:string = ''
gender:string = 'male'
subType:string = 'yearly'
status:string = 'active'

createNewUser(){
 this.userService.createUser(this.name, this.gender, this.subType, this.status)
}

}
