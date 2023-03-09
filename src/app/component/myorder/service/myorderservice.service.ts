import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../../login/service/auth-guard.service';
import { Order } from '../../order/model/order.model';
import { Reviews } from '../../productdeatails/model/review.model';

@Injectable({
  providedIn: 'root'
})
export class MyorderServiceService {

  getOrdersApi:string;
  postReviewApi:string;

  constructor(private http:HttpClient, private loginService:AuthGuardService) {
    this.getOrdersApi="http://localhost:1000/order-service/api/allorder/byuser/";
    this.postReviewApi="http://localhost:1000/product-service/review/postreview/";

   }

   getOrders():Observable<Order[]>{
    let userId = localStorage.getItem('userId');
    return this.http.get<Order[]>(this.getOrdersApi+userId,

      {headers: { authorization:
        localStorage.getItem("auth") } })

}

postReview(productId:string,review:Reviews):Observable<Reviews>{
  return this.http.post<Reviews>(this.postReviewApi+productId+"/"+localStorage.getItem('userId')!,review);

}




}
