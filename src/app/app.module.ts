import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CategoryHomeComponent } from './component/category/category-home/category-home.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductHomeComponent } from './component/products/product-home/product-home.component';
import { ProductdetailsHomeComponent } from './component/productdeatails/productdetails-home/productdetails-home.component';
import { LoginHomeComponent } from './component/login/login-home/login-home.component';
import { RagisterHomeComponent } from './component/register/ragister-home/ragister-home.component';
import { CartHomeComponent } from './component/cart/cart-home/cart-home.component';
import { ProfileHomeComponent } from './component/profile/profile-home/profile-home.component';
import { OrderHomeComponent } from './component/order/order-home/order-home.component';
import { MyorderHomeComponent } from './component/myorder/myorder-home/myorder-home.component';
import { PostproductHomeComponent } from './component/postproduct/postproduct-home/postproduct-home.component';
import { WalletHomeComponent } from './component/wallet/wallet-home/wallet-home.component';
import { OrdersummaryHomeComponent } from './component/ordersummary/ordersummary-home/ordersummary-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryHomeComponent,
    FooterComponent,
    ProductHomeComponent,
    ProductdetailsHomeComponent,
    LoginHomeComponent,
    RagisterHomeComponent,
    CartHomeComponent,
    ProfileHomeComponent,
    OrderHomeComponent,
    MyorderHomeComponent,
    PostproductHomeComponent,
    WalletHomeComponent,
    OrdersummaryHomeComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatIconModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
