import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }
}
