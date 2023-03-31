import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-rooting.module';

import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import { ListViewModule } from '@progress/kendo-angular-listview';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    DetailCustomerComponent,
    AddInvoiceComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ListViewModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
