import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Product } from '../model/product.model';
import { ProductHomeComponent } from '../product-home/product-home.component';

import { ProductService } from './product.service';

describe(' ProductService', () => {
  let component: ProductHomeComponent;
  let fixture: ComponentFixture< ProductHomeComponent>;

  let service: ProductService;
  let product:Product;
  let products:Product[];


  let htttpClientSpy:jasmine.SpyObj<HttpClient>;


  beforeEach(async () => {
    let htttpClientSpyObj = jasmine.createSpyObj('HttpClient',['get','post','put','delete']);
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers:[ ProductService,
        {
          provide : HttpClient,
          useValue : htttpClientSpyObj
        }

      ],
      declarations: [ ProductHomeComponent ]

    })
    .compileComponents();

    service = TestBed .inject(ProductService);
    htttpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;

   product={
     productid:"",
 category:null,
 categoryId:"",
 description:"",
 image:[],
 merchantId:"",
 merchantName:"",
 price:900,
 productName:"",
 productType:"",
 specification:null
          }

  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("get products by categoryid ",(done:DoneFn)=>{

    htttpClientSpy.get.and.returnValue(of(products));
    service.getProductByCategory(product.categoryId).subscribe({
      next:(data)=>{
        expect(data).toEqual(products);
        done();
      },
      error:(err)=> {
        done.fail;
      }
    })

    expect(htttpClientSpy.get).toHaveBeenCalledTimes(1);

});

it("get all products ",(done:DoneFn)=>{

  htttpClientSpy.get.and.returnValue(of(products));
  service.getAllProducts().subscribe({
    next:(data)=>{
      expect(data).toEqual(products);
      done();
    },
    error:(err)=> {
      done.fail;
    }
  })

  expect(htttpClientSpy.get).toHaveBeenCalledTimes(1);

});


});
