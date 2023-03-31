import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../models/customer-model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-customer',
  templateUrl : './add-customer.component.html',
  styleUrls : ['./add-customer.scss']
})
export class AddCustomerComponent implements OnInit{

  public form !: FormGroup;
  public newCustomer: Customer = new Customer;
  public customers !:any;

  constructor(private api : ApiService, private router : Router){}

  ngOnInit(): void {
    this.createForm();

    this.api.getCustomers()
    .subscribe((resData:any) => {
      this.customers = resData
      console.log(this.customers);
    }); 
  }

  createForm(){
    this.form = new FormGroup({
      fullName : new FormControl(),
      email : new FormControl()
    })
  }

  onSubmit() : void{
    console.log(this.newCustomer);
    
    this.newCustomer.id = this.customers.length +1;


    this.newCustomer.fullName = this.form.value.fullName;
    this.newCustomer.email = this.form.value.email;
    console.log(this.newCustomer);
    
    this.putCustomer(this.newCustomer);
    this.router.navigateByUrl("/");
  }


  putCustomer(customer:Customer){
    console.log(customer);
    this.api.postCustomer(customer)
    .subscribe((resData:any) => {
      console.log(resData);
    });
  }
}
