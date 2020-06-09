import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User = new User();
  countSubmit = 0;

  constructor() { }

  ngOnInit(): void { }

  onSubmit(form) {
    this.countSubmit++;
  }

}

export class User {

  name = '';
  email = '';

}