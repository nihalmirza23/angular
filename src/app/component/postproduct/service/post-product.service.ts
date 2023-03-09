import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../../login/service/auth-guard.service';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class PostProductService {

  postProductApi:string;

  constructor(private http:HttpClient,private loginService:AuthGuardService) {
    this.postProductApi ="http://localhost:1000/product-service/product/allproduct/";
  }

  postProduct(product:Product,categoryId:string):Observable<Product>{
    let userId = localStorage.getItem('userId');
    return this.http.post<Product>(this.postProductApi+userId+"/"+categoryId,product);

  }
}
