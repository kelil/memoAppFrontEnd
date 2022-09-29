import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { BnNgIdleService } from 'bn-ng-idle';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'memo_app';
  isLoggedIn = false;
  username: any;

  constructor(private storageService: StorageService, private bnIdle: BnNgIdleService, private authService:AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.username = user.username;
    }
    this.bnIdle.startWatching(300).subscribe((res) => {
      if (res) {
        this.logout()
        console.log('session expired');
        //this.router.navigateByUrl('logout');
      }
    });
  }
  logout() {
    console.log("dhufeera")
    return this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        window.location.reload();
      },
      error: err => {
        alert(err);
        this.storageService.clean();
        window.location.reload();
      }
    }); 
   
  }


}
