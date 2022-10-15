import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './componenets/customer/customer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './componenets/nav/nav.component';
import { MenuComponent } from './componenets/menu/menu.component';
import { CategoryComponent } from './componenets/category/category.component';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './componenets/employee/employee.component';
import { OrderComponent } from './componenets/order/order.component';
import { ProductComponent } from './componenets/product/product.component';
import { SupplierComponent } from './componenets/supplier/supplier.component';
import { ShipperComponent } from './componenets/shipper/shipper.component';
import { LogComponent } from './componenets/log/log.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NavComponent,
    MenuComponent,
    CategoryComponent,
    EmployeeComponent,
    OrderComponent,
    ProductComponent,
    SupplierComponent,
    ShipperComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
