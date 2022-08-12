import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.css'],
})
export class LoadingOverlayComponent implements OnInit {
  isLoading: boolean = false;
  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.subscribeToLoadingStatus();

    // 5 saniye sonra loading gelsin
    // setTimeout(() => {
    //   this.loadingService.setIsLoading(true);
    // }, 5000);
  }

  subscribeToLoadingStatus() {
    this.loadingService.isLoading.subscribe((value) => {
      this.isLoading = value;
    });
  }
}