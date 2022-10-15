import { LogComponent } from './componenets/log/log.component';
import { ShipperComponent } from './componenets/shipper/shipper.component';
import { SupplierComponent } from './componenets/supplier/supplier.component';
import { ProductComponent } from './componenets/product/product.component';
import { OrderComponent } from './componenets/order/order.component';
import { EmployeeComponent } from './componenets/employee/employee.component';
import { CategoryComponent } from './componenets/category/category.component';
import { CustomerComponent } from './componenets/customer/customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',redirectTo: '/customers', pathMatch:'full'},
  { path: 'customers', component: CustomerComponent },
  { path: 'catagories', component: CategoryComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'products', component: ProductComponent },
  { path: 'suppliers', component: SupplierComponent },
  { path: 'shippers', component: ShipperComponent },
  { path: 'logs', component: LogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
