import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-person-list',
  templateUrl : './person-list.component.html',
  styleUrls : ['./person-list.scss']
})
export class PersonListComponent implements OnInit{

  customers!:any;

  constructor(private api : ApiService, private router : Router){}

  ngOnInit(){
    this.api.getCustomers()
    .subscribe((resData:any) => {
      this.customers = resData
      console.log(this.customers);
    }); 
  }

  goToDetail(id:number){
    this.router.navigateByUrl(""+id);
  }

  goToAddCustomer() : void{
    this.router.navigateByUrl("/create");
  }
}
