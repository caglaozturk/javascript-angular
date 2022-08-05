import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customers/customer.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  customerList! : Customer[];
  
  status:string='init';

  constructor(private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  changeStatus(val:string) {
    setTimeout(() => {
      this.status=val;
    }, 1000);
  }

  getCustomers(){
    this.changeStatus('loading');
    this.customerService.getList().subscribe((response) =>{      
      this.changeStatus('loaded');
      this.customerList = response;
    })
  }

  deleteCustomer(id:number){
    if(confirm("Are you sure want to delete?")){
      this.customerService.delete(id).subscribe(() => {
        this.getCustomers();
        //this.router.navigateByUrl("dashboard/customers")
      })
    }    
  }

  selectedCustomerId(selectedCustomer: Customer):void{
    this.router.navigateByUrl(`dashboard/customer/${selectedCustomer.id}`)
    // window.location.href = `dashboard/customer/${selectedCustomer.id}`
  }

}
