import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  resData:string = ''
  msg:any

  onSubmit(loginData:any){
    if(!loginData.valid){
      this.msg = "Login failed!";
      return;
    }
    this.loginService.loginUser(loginData.value).subscribe((response : string) => {
      this.resData = response;
      console.log(this.resData);
      if(this.resData != null){
        localStorage.setItem('token', this.resData);
        this.router.navigate(['home/home']);
      }
      else{
        this.router.navigate(['']);
      }
    });
  }
}
