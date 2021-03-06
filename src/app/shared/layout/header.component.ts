import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services';
import { User } from '../models';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  currentUser: User;

  ngOnInit () {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    )
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }
}
