import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../models/invoice-model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl : './add-invoice.component.html',
  styleUrls : ['./add-invoice.scss']
})


export class AddInvoiceComponent implements OnInit{


  form !: FormGroup;
  possibleStatus : string[] = ["Envoyée", "Payée"];
  newInvoice : Invoice = new Invoice;
  invoices !:any;
  status!:any


  constructor(private route: ActivatedRoute, private api : ApiService, private router : Router){
    
  }

  ngOnInit(): void {
    this.createFrom();
  }


  createFrom(){
    this.form = new FormGroup({
      amount : new FormControl(),
      status : new FormControl()
    })
  }

  onSubmit() : void{
    
    console.log(this.form);
    const idCustomer: number = Number(this.route.snapshot.paramMap.get('id'));

    this.newInvoice.status = this.status;
    this.api.getInvoices().subscribe((resData :any ) => {
      console.log(resData);
      this.invoices = resData;
      this.newInvoice.amount = this.form.value.amount;
      
      this.newInvoice.id_person = idCustomer;
      this.newInvoice.id = this.invoices.length +1;
      console.log(this.newInvoice);

      this.api.postInvoice(this.newInvoice).subscribe((resData:any) => {
        this.router.navigateByUrl(""+this.newInvoice.id_person);
      })

      
    })
  }

  onChange(value: any) {
    this.status = value.target.value;
}
}
