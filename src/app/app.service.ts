import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CartService } from "./component/cart/service/cart.service";


@Injectable({
  providedIn: 'root'
})
export class AppService{

  isMerchant=new BehaviorSubject<boolean>(false);
  cartItems = new BehaviorSubject<number>(0);
  loggedIn = new BehaviorSubject<boolean>(false);

  //[] is initial value of cart_product.

  constructor(private cartService:CartService) {
    let user = localStorage.getItem('token');
    let role = localStorage.getItem('userRole');
    let userId = localStorage.getItem('userId');


    if(user){
      this.loggedIn.next(true);

      this.cartService.getCartByUserId(userId).subscribe(data=>{
        this.cartItems.next(data.totalItems);
      })
      if(role === "Merchant"){
        this.isMerchant.next(true);
      }

    }

  }


}
