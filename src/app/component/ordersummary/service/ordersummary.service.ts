import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../../login/service/auth-guard.service';
import { Order } from '../../myorder/model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersummaryService {

  getOrderByOrderIdApi:string;
  sendEmailApi:string;


  constructor(private http:HttpClient,private loginService:AuthGuardService) {

    this.getOrderByOrderIdApi="http://localhost:1000/order-service/api/allorder/";
    this.sendEmailApi="http://localhost:1000/order-service/email/";

   }

   getOrderByOrderId(orderId:string):Observable<Order>{
    return this.http.get<Order>(this.getOrderByOrderIdApi+orderId,


       {headers: { authorization:
         localStorage.getItem("auth") } })
   }



   sendEmail(orderId:string){
    return this.http.get<boolean>(this.sendEmailApi+orderId);
}
}
