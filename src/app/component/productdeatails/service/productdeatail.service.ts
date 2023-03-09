import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../../cart/cart-home/model/cart.model';
import { AuthGuardService } from '../../login/service/auth-guard.service';
import { Product } from '../model/product.model';
import { Reviews } from '../model/review.model';

@Injectable({
  providedIn: 'root',
})
export class ProductdeatailService {
  private getProductByProductId: string;
  private addCartApi: string;
  private getReviews:string

  constructor( private http: HttpClient,private loginService: AuthGuardService)
  {
    this.getProductByProductId ='http://localhost:1000/product-service/product/allproduct/';
    this.addCartApi = 'http://localhost:1000/cart-service/cart/add/items/';
    this.getReviews='http://localhost:1000/product-service/review/getreview/';
  }

  getProductsByProductId(productId: string): Observable<Product> {
    return this.http.get<Product>(this.getProductByProductId + productId);
  }

   addItemsInCart(productId: string, quantity: number): Observable<Cart> {
     let userId = localStorage.getItem('userId');
     return this.http.post<Cart>(
       this.addCartApi + userId + '/' + productId + '/' + 1,{});
  }

  getReviewByProductId(productId:string):Observable<Reviews[]>{
    return this.http.get<Reviews[]>(this.getReviews+productId);
}


}
