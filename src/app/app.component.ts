import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users$; 
  constructor(private userService: UserService) {
  }
  ngOnInit() {
    this.users$ = this.userService.getUsers();
    console.log(this.users$);
  }
  title = 'givaproj';
} 

