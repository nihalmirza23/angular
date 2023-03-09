import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../../login/service/auth-guard.service';
import { Cart } from '../cart-home/model/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private getByCartIdApi:string;
  private getCartsApi:string;
  private getCartByUserIdApi:string;
  private addProductsApi:string;
  private addCartApi:string;
  private addQuantityApi:string;
  private subtractQuantityApi:string;
  private deleteItemApi:string;
  private removeItemApi:string;

constructor(private http:HttpClient,private loginService:AuthGuardService) {

     this.getByCartIdApi="http://localhost:1000/cart-service/cart/getCart/";
     this.getCartsApi="http://localhost:1000/cart-service/cart/carts";
     this.getCartByUserIdApi="http://localhost:1000/cart-service/cart/byUser/";
     this.addProductsApi="http://localhost:1000/cart-service/cart/add/items/";
     this.addCartApi="http://localhost:1000/cart-service/cart/addcart/";
     this.addQuantityApi="http://localhost:1000/cart-service/cart/add/quantity/";
     this.subtractQuantityApi="http://localhost:1000/cart-service/cart/remove/quantity/";
     this.deleteItemApi="http://localhost:1000/cart-service/cart/remove/item/";
     this.removeItemApi="http://localhost:1000/cart-service/cart/removeall/";

}

// public getCartByUserId(userId:string){
//   userId=localStorage.getItem("userId");
// return this.http.get<Cart>(this.getCartByUserIdApi+userId);

// }

// public getCartById(cartId:string){
// return this.http.get<Cart>(this.getByCartIdApi+cartId);

// }

// public getCarts():Observable<Cart[]>{
// return this.http.get<Cart[]>(this.getCartsApi);

// }

// public addCart(cart:Cart):Observable<Cart> {
// let userId=localStorage.getItem("userId");
// return this.http.post<Cart>(this.addCartApi+userId,{},

//   {headers: { authorization:
//     localStorage.getItem("auth") } }
//   );

//   }
// if(userId){
// return this.http.post<Cart>(this.addCartApi+userId,{quantity:1},

// {headers: { authorization:
//   localStorage.getItem("auth") } })

// }else{
// throw new Error("USER NOT LOGGED IN"); }

// }

// public addItemsInCart(userId:string,productId:string,quantity:number):Observable<Cart>{
// userId=localStorage.getItem("userId");
// return this.http.post<Cart>(this.addProductsApi+userId+"/"+productId+"/"+(1),{},

// {headers: { authorization:
// localStorage.getItem("auth") } })

// }

// public addQuantity(userId:string,productId:string,quantity:number):Observable<Cart>{

// userId=localStorage.getItem("userId");
// console.log(this.addQuantityApi+userId+"/"+productId+"/"+1);
// return this.http.post<Cart>(this.addQuantityApi+userId+"/"+productId+"/"+1,{},


// {headers: { authorization:
// localStorage.getItem("auth") } })

// }

// public subQuantity(userId:string,productId:string,quantity:number):Observable<Cart>{
// userId=localStorage.getItem("userId");
// return this.http.post<Cart>(this.subtractQuantityApi+userId+"/"+productId+"/"+(1),{},


// {headers: { authorization:
// localStorage.getItem("auth") } })
// }

// public deleteItem(userId:string,productId:string):Observable<Cart>{
// userId=localStorage.getItem("userId");
// return this.http.put<Cart>(this.deleteItemApi+userId+"/"+productId,{},


// {headers: { authorization:
// localStorage.getItem("auth") } })

// }

// public removeAllItems(cartId:string):Observable<Cart>{
// return this.http.put<Cart>(this.removeItemApi+cartId,{},

//   {headers: { authorization:
//     localStorage.getItem("auth")}})
// }
// }





public getCartByUserId(userId:string){
  userId=localStorage.getItem("userId");
return this.http.get<Cart>(this.getCartByUserIdApi+userId);

}

public getCartById(cartId:string){
return this.http.get<Cart>(this.getByCartIdApi+cartId);

}

public getCarts():Observable<Cart[]>{
return this.http.get<Cart[]>(this.getCartsApi);

}

public addCart(cart:Cart):Observable<Cart> {
let userId=localStorage.getItem("userId");

if(userId){
return this.http.post<Cart>(this.addCartApi+userId,{quantity:1},

{headers: { authorization:
  localStorage.getItem("auth") } })

}else{
throw new Error("USER NOT LOGGED IN"); }

}

public addItemsInCart(userId:string,productId:string,quantity:number):Observable<Cart>{
userId=localStorage.getItem("userId");
return this.http.post<Cart>(this.addProductsApi+userId+"/"+productId+"/"+(1),{},

{headers: { authorization:
localStorage.getItem("auth") } })

}

public addQuantity(userId:string,productId:string,quantity:number):Observable<Cart>{

userId=localStorage.getItem("userId");
console.log(this.addQuantityApi+userId+"/"+productId+"/"+1);
return this.http.post<Cart>(this.addQuantityApi+userId+"/"+productId+"/"+1,{},


{headers: { authorization:
localStorage.getItem("auth") } })

}

public subQuantity(userId:string,productId:string,quantity:number):Observable<Cart>{
userId=localStorage.getItem("userId");
return this.http.post<Cart>(this.subtractQuantityApi+userId+"/"+productId+"/"+(1),{},


{headers: { authorization:
localStorage.getItem("auth") } })
}

public deleteItem(userId:string,productId:string):Observable<Cart>{
userId=localStorage.getItem("userId");
return this.http.put<Cart>(this.deleteItemApi+userId+"/"+productId,{},


{headers: { authorization:
localStorage.getItem("auth") } })

}

public removeAllItems(cartId:string):Observable<Cart>{
return this.http.put<Cart>(this.removeItemApi+cartId,{},

  {headers: { authorization:
    localStorage.getItem("auth") } })
}
}
