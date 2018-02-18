import { Component, OnInit, Input } from '@angular/core';
import { Errors } from '../models';
import { toast } from 'materialize-css';

@Component({
  selector: 'app-list-errors',
  templateUrl: './list-errors.component.html',
  styleUrls: ['./list-errors.component.css']
})
export class ListErrorsComponent implements OnInit {
  formattedErrors: Array<string> = [];

  constructor() { }

  ngOnInit() { }

  @Input()
  set errors(errorList: Errors) {
    if (errorList.error && errorList.error.errors) {
      this.formattedErrors = Object.keys(errorList.error.errors || {})
      .map(key => `${key} ${errorList.error.errors[key]}`);
      toast(this.formattedErrors, 3000, 'rounded green');
    }
  }

  get errorList() {
    return this.formattedErrors;
  }

}
