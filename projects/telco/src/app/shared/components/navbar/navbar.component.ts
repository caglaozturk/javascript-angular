import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import { AuthService } from 'src/app/core/auth/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private messageService:MessageService) { }

  items!: MenuItem[];

  ngOnInit() { } 

  logOut() {
    this.authService.logOut();
    this.messageService.add({severity:'success', summary:'Success', detail:'Successfully logged out!'});
  }

}
