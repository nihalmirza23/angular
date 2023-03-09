import { Component, OnInit } from '@angular/core';
import { Categoryservice } from '../service/categoryservice.service';
import { Category } from './model/category.model';




@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.css']
})
export class CategoryHomeComponent implements OnInit {


categories :Category[];
errorMsg:string;



  constructor(private categoryService: Categoryservice) { }

  ngOnInit() : void{
    this.categoryService.getAllCategories().subscribe((data)=>{
      this.categories=data;
    },
    error=>{
      this.errorMsg="Error in loading Categories, Please contact administrator!"

    });
  }

}
