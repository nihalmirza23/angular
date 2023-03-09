import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../../login/service/auth-guard.service';
import { Category } from '../category-home/model/category.model';



@Injectable({
  providedIn: 'root'
})
export class Categoryservice {
/*
Fetch all dATA FRom get all category Api
*/

  private getCategoryApi: string;
  private getCategoryByNameApi:string;



  constructor(private http: HttpClient,private loginService:AuthGuardService) {
    this.getCategoryApi="http://localhost:1000/product-service/category/categories";
    this.getCategoryByNameApi="http://localhost:1000/product-service/category/category/"
  }

  getAllCategories() : Observable<Category[]> {
     return this.http.get<Category[]>(this.getCategoryApi);


  }

  getCategoryByName(categoryName:string) :Observable<Category> {
    return this.http.get<Category>(this.getCategoryByNameApi+categoryName);


  }
}
