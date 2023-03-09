import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';
import { Reviews } from '../model/review.model';









import { ProductdeatailService } from '../service/productdeatail.service';

@Component({
  selector: 'app-productdetails-home',
  templateUrl: './productdetails-home.component.html',
  styleUrls: ['./productdetails-home.component.css']
})
export class ProductdetailsHomeComponent implements OnInit {

  products:Product[];
  product:Product;

  errorMsg:string;
  productId:string;
  userId:string;
  imageurl:string;



  reviews:Reviews[];
  totalRatings:number;
  star5:number;
  star4:number;
  star3:number;
  star2:number;
  star1:number;
  ratingStat:number;





  constructor(private actRoute:ActivatedRoute,private productdeatailService:ProductdeatailService) {
    //this.userId="abc";
   }

  ngOnInit(): void {
    this.userId=localStorage.getItem("userId") || "jhj";

    this.actRoute.params.subscribe(
      params=>{
        this.productId=params['productId'];
        console.log(this.productId)
        this.productdeatailService.getProductsByProductId(params['productId']).subscribe(data=>{
          this.product=data;
          this.imageurl=data.image?.at(0)||"";
        },error=>{
          this.errorMsg='could not load product details';

        });


        this.productdeatailService.getReviewByProductId(this.productId).subscribe(
          data=>{
            this.reviews=data;
            console.log(this.reviews);
            this.totalRatings=this.reviews.length;
            this.star1=this.reviews.filter(r=>r.ratings==1).length;
            this.star2=this.reviews.filter(r=>r.ratings===2).length;
            this.star3=this.reviews.filter(r=>r.ratings===3).length;
            this.star4=this.reviews.filter(r=>r.ratings===4).length;
            this.star5=this.reviews.filter(r=>r.ratings===5).length;
            this.ratingStat=((this.star1*1 + this.star2*2 + this.star3*3 +
                              this.star4*4 + this.star5*5) / this.totalRatings) || 0.0;
            this.reviews.reverse;
   }
  )



      }
    );


  }

  showImg(image:string){
    this.imageurl=image;
}





  // postProductinCart(){
  //  this.productdeatailService.addItemsInCart(this.productId,1).subscribe(data=>{
  //    console.log(data);
  //   });
  //  }



}
