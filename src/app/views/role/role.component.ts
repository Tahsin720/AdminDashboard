import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.sass']
})
export class RoleComponent implements OnInit {
  constructor(private router: Router){

  }
  reactiveroleform!: FormGroup;

  ngOnInit() {
    this.reactiveroleform = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'accessArea' : new FormControl(null, Validators.required),
      'designatedUser' : new FormControl(null, Validators.required),
      'status': new FormControl()
    });
  }

  CreateRole(){
    console.log(this.reactiveroleform.value);
  }
}
