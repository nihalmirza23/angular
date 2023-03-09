import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartHomeComponent } from './component/cart/cart-home/cart-home.component';
import { CategoryHomeComponent } from './component/category/category-home/category-home.component';
import { LoginHomeComponent } from './component/login/login-home/login-home.component';
import { AuthGuardService } from './component/login/service/auth-guard.service';
import { AuthGuard } from './component/login/service/authguard';
import { MyorderHomeComponent } from './component/myorder/myorder-home/myorder-home.component';
import { OrderHomeComponent } from './component/order/order-home/order-home.component';
import { OrdersummaryHomeComponent } from './component/ordersummary/ordersummary-home/ordersummary-home.component';
import { PostproductHomeComponent } from './component/postproduct/postproduct-home/postproduct-home.component';
import { ProductdetailsHomeComponent } from './component/productdeatails/productdetails-home/productdetails-home.component';
import { ProductHomeComponent } from './component/products/product-home/product-home.component';
import { ProfileHomeComponent } from './component/profile/profile-home/profile-home.component';
import { RagisterHomeComponent } from './component/register/ragister-home/ragister-home.component';
import { WalletHomeComponent } from './component/wallet/wallet-home/wallet-home.component';

const routes: Routes = [

  {path:'', component: CategoryHomeComponent},
  {path:'product/:categoryId', component: ProductHomeComponent},
  {path:'productdetails/:productId', component: ProductdetailsHomeComponent},
  {path:'user/register', component: RagisterHomeComponent},
  {path:'login', component: LoginHomeComponent},
  {path:'cart/add/items/:userId/:productId/:quantity', component: CartHomeComponent,canActivate: [AuthGuard]},
  {path:'cart', component: CartHomeComponent,canActivate: [AuthGuard]},
  {path:'cart/:userId', component: CartHomeComponent,canActivate: [AuthGuard]},
  {path:'profile',component:ProfileHomeComponent,canActivate: [AuthGuard]},
  {path:'order/:userId',component:OrderHomeComponent,canActivate:[AuthGuard]},
  {path:'myorders',component:MyorderHomeComponent,canActivate:[AuthGuard]},
  {path:'postproduct',component:PostproductHomeComponent},
  {path:'wallet',component:WalletHomeComponent,canActivate:[AuthGuard]},
  {path:'myorder/:orderId',component:OrdersummaryHomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
