import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Order } from '../../myorder/model/order.model';
import { Order2 } from '../model/Order2.model';
import { OrdersummaryHomeComponent } from '../ordersummary-home/ordersummary-home.component';

import { OrdersummaryService } from './ordersummary.service';

describe('OrderSummaryServiceService', () => {
  let component:OrdersummaryHomeComponent;
  let fixture: ComponentFixture<OrdersummaryHomeComponent>;

  let service: OrdersummaryService;
  let order:Order;
  let order1:Order2;
  let orders:Order[];


  let htttpClientSpy:jasmine.SpyObj<HttpClient>;


  beforeEach(async () => {
    let htttpClientSpyObj = jasmine.createSpyObj('HttpClient',['get','post','put','delete']);
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers:[OrdersummaryService,
        {
          provide : HttpClient,
          useValue : htttpClientSpyObj
        }

      ],
      declarations: [ OrdersummaryHomeComponent]

    })
    .compileComponents();

    service = TestBed .inject(OrdersummaryService);
    htttpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
   order1={
     orderId:"",
     address:null,
     amountPaid:900,
     customerId:"",
     items:null,
     modeOfPayment:"",
     orderDate:null,
     orderStatus:"",
   }
    order={
   address:{

   },
   amountPaid:300,
   items:[],
   modeOfPayment:"payment gateway",
   orderDate:null,
   orderStatus:"",
   userId:"id3",
   username:"test"
          }

  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });



it("get order by orderId method check",(done:DoneFn)=>{

  htttpClientSpy.get.and.returnValue(of(order));
  service.getOrderByOrderId(order1.orderId).subscribe({
    next:(data)=>{
      expect(data).toEqual(order);
      done();
    },
    error:(err)=> {
      done.fail;
    }
  })

  expect(htttpClientSpy.get).toHaveBeenCalledTimes(1);

});

});


