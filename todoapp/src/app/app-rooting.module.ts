import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { AppComponent } from './app.component';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';
import { PersonListComponent } from './person-list/person-list.component';

const routes: Routes = [
    { path: '', component: PersonListComponent },
    
    { path: ':id/invoices/add', component : AddInvoiceComponent},
    { path: 'create', component : AddCustomerComponent},
    { path: ':id', component : DetailCustomerComponent},
];

@NgModule({
    imports : [RouterModule.forRoot(
        routes,
        {
            preloadingStrategy : PreloadAllModules
        }
    )],
    exports : [RouterModule]
})
export class AppRoutingModule {}