import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

products:Product[];
categoryId:string;
errorMsg:string;
cid:string;
totalLength:any;
page:number =1;

  constructor(private actRoute:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {

    this.actRoute.params.subscribe(
      params=>{
        this.categoryId=params['categoryId'];
        this.productService.getProductByCategory(params['categoryId']).subscribe(data=>{
          this.products=data;

          this.totalLength = data.length;
        },error=>{
          this.errorMsg='could not load products , please contact administor';

        });
      }
    );
  }

}
