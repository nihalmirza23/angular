import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Order } from '../model/order.model';
import { MyorderHomeComponent } from '../myorder-home/myorder-home.component';

import { MyorderServiceService } from './myorderservice.service';

describe('MyOrdersService', () => {
  let component: MyorderHomeComponent;
  let fixture: ComponentFixture<MyorderHomeComponent>;

  let service: MyorderServiceService;
  let order:Order;
  let orders:Order[];

  let htttpClientSpy:jasmine.SpyObj<HttpClient>;


  beforeEach(async () => {
    let htttpClientSpyObj = jasmine.createSpyObj('HttpClient',['get','post','put','delete']);
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers:[MyorderServiceService,
        {
          provide : HttpClient,
          useValue : htttpClientSpyObj
        }

      ],
      declarations: [  MyorderHomeComponent]

    })
    .compileComponents();

    service = TestBed .inject(MyorderServiceService);
    htttpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
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

  it("get orders method check",(done:DoneFn)=>{

    htttpClientSpy.get.and.returnValue(of(orders));
    service.getOrders().subscribe({
      next:(data)=>{
        expect(data).toEqual(orders);
        done();
      },
      error:(err)=> {
        done.fail;
      }
    })

    expect(htttpClientSpy.get).toHaveBeenCalledTimes(1);

});




});

