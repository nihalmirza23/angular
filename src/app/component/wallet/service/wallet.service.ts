import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../../login/service/auth-guard.service';
import { OrderStatement } from '../model/orderstatment.model';
import { wallet } from '../model/wallet.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



@Injectable({
  providedIn: 'root'
})
export class WalletService {

  getWalletApi:string;
  createWalletApi:string;
  addMoneyApi:string;
  payByWalletApi:string;
  getStatementsApi:string;

  constructor(private http:HttpClient,private loginService:AuthGuardService) {
    this.getWalletApi="http://localhost:8099/api/wallet/user/";
    this.createWalletApi="http://localhost:8099/api/wallet/";
    this.addMoneyApi="http://localhost:8099/api/add/wallet/";
    this.payByWalletApi="http://localhost:8099/api/pay/byWallet/";
    this.getStatementsApi="http://localhost:8099/api/payment/history/";


   }

   getWallet():Observable<wallet>{
    let userId = localStorage.getItem('userId');
    return this.http.get<wallet>(this.getWalletApi+userId);
   }

   createwallet():Observable<wallet>{
    let userId = localStorage.getItem('userId');
    return this.http.post<wallet>(this.createWalletApi+userId,{currentBalance:0});
   }

   addMoney(walletId:string,amount:number):Observable<wallet>{
    return this.http.post<wallet>(this.addMoneyApi+walletId+"/"+amount,{});
   }

   createOrder(order:any):Observable<any> {
    return this.http.post("http://localhost:8080/pg/createOrder", {
      customerName: order.name,
      email: order.email,
      phoneNumber: order.phone,
      amount: order.amount
    }, httpOptions);
   }

   payBywallet(amount:number,walletId:string):Observable<wallet>{
    return this.http.get<wallet>(this.payByWalletApi+amount+"/"+walletId,{});
   }

   getStatement(walletId:string):Observable<OrderStatement[]>{
    return this.http.get<OrderStatement[]>(this.getStatementsApi+walletId);
  }


}
