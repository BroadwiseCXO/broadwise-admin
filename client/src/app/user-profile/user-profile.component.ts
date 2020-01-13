import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor(public router: Router, public userService: UserService) { }

  ngOnInit() {
    
  }
  
  onClickAddCourse(){
    this.router.navigate(['/courseadd']);
  }

  onClickDropCourse(){
    this.router.navigate(['/courseadd']);
  }

  onClickAddModule(){
    this.router.navigate(['/cmoduleadd']);
  }

  onClickDropModule(){
    this.router.navigate(['/cmoduleadd']);
  }


  onClickLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }


}
