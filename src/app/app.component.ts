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

  isNumber(value: any) {
    return typeof value === 'number' ? true : false;
  }

  validUrl(url: string) {
    const regex = new RegExp('http*', 'g');
    const validUrl = regex.test(url);
    return validUrl;
  }
}
