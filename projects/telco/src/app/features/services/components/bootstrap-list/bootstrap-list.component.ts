import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../../models/service';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-bootstrap-list',
  templateUrl: './bootstrap-list.component.html',
  styleUrls: ['./bootstrap-list.component.css']
})
export class BootstrapListComponent implements OnInit {
  services!: Service[];
  start:number = 1;
  end:number = 5;
  tempServices!: Service[];
  allDataArray:number[] = [];

  constructor(private serviceService: ServicesService, private router:Router) { }

  ngOnInit() {
    this.getAllList();
  }

  getAllList() {
    this.serviceService.getList().subscribe(data => {
      this.tempServices = data;
      let allDataCount = Math.ceil(data.length / 5);
      for (let index = 1; index <= allDataCount; index++) {
        this.allDataArray.push(index)
      }
      this.fillData(1);
    });
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
