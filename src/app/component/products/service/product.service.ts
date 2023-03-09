import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../../login/service/auth-guard.service';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private getProductByCategoryIdApi:string;
  private getAllProductsApi:string;

  constructor(private http: HttpClient,private loginService:AuthGuardService) {
    this.getProductByCategoryIdApi="http://localhost:1000/product-service/product/allproduct/bycategoryid/";
    this.getAllProductsApi="http://localhost:1000/product-service/product/allproduct";
  }

  getProductByCategory(categoryId:String):Observable<Product[]>{
    return this.http.get<Product[]>(this.getProductByCategoryIdApi+categoryId);


  }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.getAllProductsApi);


  }

}
