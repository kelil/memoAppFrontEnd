import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any  ={
    userName: null,
    password: null,
  }
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private storageService: StorageService) { }
  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }
  onSubmit(): void {
   // const { username, password } = this.form;
   console.log(this.form.userName)
    this.authService.login(this.form.userName, this.form.password).subscribe({
      next: data => {
        
        console.log(data)
       // const now  =  Date.now()
       // this.autologout(now+80000000)
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
        
      },
      error: err => {
        console.log(err)
        this.errorMessage =err.error.message;
        this.isLoginFailed = true;
       this.form.userName=''
       this.form.password = ''
      }
    });
  }
  reloadPage(): void {
    window.location.reload();
  }

  autologout(expireIn: number){
   // alert(expireIn)
    setTimeout(()=>{
      this.logout()
    },expireIn)
  }
  logout() {
    console.log("dhufeera")
   return this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
      },
      error: err => {
        alert(err);
      }
    });
  }
  
}