import { Component } from '@angular/core';
import { UserService } from '../../../../../services/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../../../../../Models/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  constructor(private userService:UserService){}
userlist:User[] =this.userService.getAllUser()
}
