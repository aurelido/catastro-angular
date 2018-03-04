import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Errors, UserService } from '../shared';
import { LocationService } from '../shared/services/location.service';

@Component({
  selector: 'auth-page',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  authType = '';
  title = '';
  errors: Errors = {error: {}};
  isSubmitting = false;
  authForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private locate: LocationService,
    private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;

      // Set a title for the page accordingly
      if (this.authType === 'login') {
        this.title = 'Acceso';
      } else if (this.authType === 'register') {
        this.title = 'Registrarse';
        this.authForm.addControl('username', new FormControl('', Validators.required));
      } else if (this.authType === 'recover') {
        this.title = 'Restaurar';
      }
    });
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = {error: {}};

    const credentials = this.authForm.value;
    this.userService
            .attemptAuth(this.authType, credentials)
            .subscribe(
              data => this.router.navigateByUrl('/'),
              err => {
                this.errors = err;
                this.isSubmitting = false;
              }
            );
  }
}
