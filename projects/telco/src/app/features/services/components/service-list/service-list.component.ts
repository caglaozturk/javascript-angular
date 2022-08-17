import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../../models/service';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services!: Service[];
  start:number = 1;
  end:number = 5;
  tempServices!: Service[];
  allDataArray:number[] = [];
  fetchStatus = 'pending';
  emptyArray:number[] = [1,2,3,4,5];

  constructor(private serviceService: ServicesService, private router:Router) { }

  ngOnInit() {
    this.getAllList();
  }

  getAllList() {
    this.fetchStatus = 'pending';
    setTimeout(() => {
    this.serviceService.getList().subscribe(data => {
      this.tempServices = data;
      let allDataCount = Math.ceil(data.length / 5);
      for (let index = 1; index <= allDataCount; index++) {
        this.allDataArray.push(index)
      }
      this.fillData(1);
        this.fetchStatus = 'loaded';
      },
      (error) => {
        this.fetchStatus = 'error';
      }
      );  
    }, 100);
  }

  deleteService(id:number){
    if(confirm("Are you sure want to delete?")){
      this.serviceService.delete(id).subscribe(()=>{
        this.getAllList();
      })
    } 
  }

  fillData(index:number) {
    this.services =  this.tempServices.slice((index-1)*5, 5*index)
  }

  selectedServiceId(selectedService: Service):void{
     this.router.navigateByUrl(`service/${selectedService.id}`);
  }
}
