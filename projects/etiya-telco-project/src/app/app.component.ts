import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'etiya-telco-project';
  warnAlert:boolean = false;
  warnText:string = "Wrong Username or Password.<br> Please try again"
  warnText2:string = "The password was entered incorrectly 3 times."
  warnText3:string = "Please contact the system administrator"

  showWarnAlert() {
    this.warnAlert = !this.warnAlert;
  }
}
