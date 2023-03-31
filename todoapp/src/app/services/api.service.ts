import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environment/environment";
import { Customer } from "../models/customer-model";
import { Invoice } from "../models/invoice-model";

@Injectable({
    providedIn :'root'
})

export class ApiService{

    urlApi : string = environment.urlApi;
    apiKey : string = environment.apiKey;

    constructor(private http : HttpClient){

    }

    getCustomers(){
        return this.http.get(this.urlApi+"/rest/v1/customers?select=*", {
            headers: {
              "Content-Type": "application/json",
              apiKey: this.apiKey
            }
        })
    }

    getInvoices(){
        return this.http.get(this.urlApi+"/rest/v1/invoices?select=*", {
            headers: {
              "Content-Type": "application/json",
              apiKey: this.apiKey
            }
        })
    }


    getCustomerById(id : number){
        return this.http.get(this.urlApi+"/rest/v1/customers?id=eq."+id, {
            headers: {
              "Content-Type": "application/json",
              apiKey: this.apiKey
            }
        }) 
    }

    getInvoicesByCustomerId(id : number){
        return this.http.get(this.urlApi+"/rest/v1/invoices?id_person=eq."+id, {
            headers: {
              "Content-Type": "application/json",
              apiKey: this.apiKey
            }
        }) 
    }


    postCustomer(customer : Customer){
        return this.http.post<Customer>(this.urlApi+"/rest/v1/customers", customer, {
            headers: {
                "Content-Type": "application/json",
                apiKey: this.apiKey
              }
        })
    }

    postInvoice(invoice : Invoice){
        return this.http.post<Customer>(this.urlApi+"/rest/v1/invoices", invoice, {
            headers: {
                "Content-Type": "application/json",
                apiKey: this.apiKey
              }
        })
    }
}