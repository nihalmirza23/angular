import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order2 } from '../model/Order2.model';
import { OrdersummaryService } from '../service/ordersummary.service';

@Component({
  selector: 'app-ordersummary-home',
  templateUrl: './ordersummary-home.component.html',
  styleUrls: ['./ordersummary-home.component.css']
})
export class OrdersummaryHomeComponent implements OnInit {

  order:Order2;
  orderId:string;
  errorMsg:string;
  constructor(private orderSummaryService:OrdersummaryService,private actRoute:ActivatedRoute) {
    this.order={

    }
  }

  ngOnInit(): void {

    this.actRoute.params.subscribe(
      params=>{
        this.orderId=params['orderId'];
       this.orderSummaryService.getOrderByOrderId(params['orderId']).subscribe(data=>{
         this.order=data;
       },error=>{
         this.errorMsg='could not load products , please contact administrator';

       });
       this.orderSummaryService.sendEmail(this.orderId).subscribe(data=>{
            })
      }
    );
    }

}
