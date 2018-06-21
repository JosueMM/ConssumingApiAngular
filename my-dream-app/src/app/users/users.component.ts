import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../../user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  current_user: User;

  constructor(private userService: UsersService ) { }

  ngOnInit() {
  }

  getUser(){
    this.userService.getUsers().subscribe(users => {this.users = users.json();});

  }

  addUser(){
    this.userService.addUser(this.current_user).subscribe(res => {
      this.ngOnInit();
    })
  }

}
