import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Customer } from '../models/customer-model';
import { Invoice } from '../models/invoice-model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-detail-customer',
  templateUrl : './detail-customer.component.html',
  styleUrls : ['./detail-customer.scss']
})
export class DetailCustomerComponent implements OnInit {

  customer !: Customer;
  invoices !: Invoice[];

  constructor(private route: ActivatedRoute, private api : ApiService, private router : Router) { }

  ngOnInit(): void {
    const idCustomer: number = Number(this.route.snapshot.paramMap.get('id'));

    console.log(idCustomer);
    
    this.api.getCustomerById(idCustomer).subscribe((resData:any)=> {
      this.customer = resData[0];
      console.log(this.customer);
    })

    this.api.getInvoicesByCustomerId(idCustomer).subscribe((resData:any) => {
      console.log(resData);
      
      this.invoices = resData;
      console.log(this.invoices);
      
    })
    
  }

  goToAdd(){
    const idCustomer: number = Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigateByUrl(idCustomer + "/invoices/add");
  }

  getBackToList(){
    this.router.navigateByUrl("/")
  }
}