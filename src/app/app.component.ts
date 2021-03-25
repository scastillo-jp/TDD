import { User } from './models/user.interface';
import { UserService } from './services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UT';
  company = 'IOET jhgjh';
  status: boolean = true;
  users: User[] = [];

  constructor(private userService: UserService) { }

  isNumber(value: any) {
    return typeof value === 'number' ? true : false;
  }

  validUrl(url: string) {
    const regex = new RegExp('http*', 'g');
    const validUrl = regex.test(url);
    return validUrl;
  }
  getUsers(){
    this.userService.getAll().subscribe( users => {
      this.users = users
      console.log(this.users)
    })
  }
}
