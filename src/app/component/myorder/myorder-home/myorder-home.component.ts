import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Reviews } from '../../productdeatails/model/review.model';
import { Order } from '../model/order.model';

import { MyorderServiceService } from '../service/myorderservice.service';

@Component({
  selector: 'app-myorder-home',
  templateUrl: './myorder-home.component.html',
  styleUrls: ['./myorder-home.component.css']
})
export class MyorderHomeComponent implements OnInit {

  reviewForm:FormGroup;
  order:Order[];
  productId:string;

  constructor(private myOrderService:MyorderServiceService) {

    this.reviewForm = new FormGroup(
      {
        "rating":new FormControl(),
        "reviewTitle":new FormControl(),
        "reviewText":new FormControl(),
      }
    );

   }

  ngOnInit(): void {
    this.myOrderService.getOrders().subscribe(data=>{
      this.order= data;
      console.log(data);
    },
    error=>{
      console.log(error);
      console.log("orders error");
    }

    );
  }

  setProductId(productId1:string){
    this.productId = productId1;
    console.log(this.productId);
}
  onsubmit(){


    let review:Reviews={
      ratings : this.reviewForm.value.rating,
      reviewTitle:this.reviewForm.value.reviewTitle,
      reviewText:this.reviewForm.value.reviewText
    }

    this.myOrderService.postReview(this.productId,review).subscribe(data=>{
      console.log(data);
      //swal("Review Posted","","success")
    },
    error=>{
      console.log(error);
});
}

}
