import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  isLoading: boolean = false;
  constructor(private loadingService:LoadingService) { }

  ngOnInit(): void {
    this.subscribeToLoadingStatus();
  }

  subscribeToLoadingStatus() {

  }

}
