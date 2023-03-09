import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthGuardService } from "../../login/service/auth-guard.service";
import { Order } from "../model/order.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


@Injectable({
  providedIn: 'root'
})

export class OrderServiceService {
    private addOrderApi:string;
    private getOrderByUserIdApi:string;
    private editOrderWalletApi:string;
    private editOrderPaymentGatewayApi:string;

  constructor(private http:HttpClient,private loginService:AuthGuardService) {
    this.addOrderApi="http://localhost:1000/order-service/api/order/";
    this.getOrderByUserIdApi="http://localhost:1000/order-service/api/allorder/byuser/";


  }

  addOrder(userId:string,order:Order) : Observable<Order>{
    userId=localStorage.getItem("userId");
    return this.http.post<Order>(this.addOrderApi+userId,order,

      {headers: { authorization:
        localStorage.getItem("auth") } })

  }

  getOrderByUser(userId:string): Observable<Order[]>{
    userId=localStorage.getItem("userId");
    return this.http.get<Order[]>(this.getOrderByUserIdApi+userId,

      {headers: { authorization:
        localStorage.getItem("auth") } })

  }
  createOrder(order:any): Observable<any> {
		return this.http.post("http://localhost:8080/pg/createOrder", {
		customerName: order.name,
		email: order.email,
		phoneNumber: order.phone,
		amount: order.amount
		}, httpOptions);
	}


}
