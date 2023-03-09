import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { OrderStatement } from '../model/orderstatment.model';
import { wallet } from '../model/wallet.model';
import { WalletHomeComponent } from '../wallet-home/wallet-home.component';

import { WalletService } from './wallet.service';

describe('WalletService', () => {
  let component: WalletHomeComponent;
  let fixture: ComponentFixture<WalletHomeComponent>;

  let service:WalletService;
let wallet:wallet ;
let orderstatement:OrderStatement;
let statements:OrderStatement[];


  let htttpClientSpy:jasmine.SpyObj<HttpClient>;


  beforeEach(async () => {
    let htttpClientSpyObj = jasmine.createSpyObj('HttpClient',['get','post','put','delete']);
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers:[WalletService,
        {
          provide : HttpClient,
          useValue : htttpClientSpyObj
        }

      ],
      declarations: [WalletHomeComponent ]

    })
    .compileComponents();

    service = TestBed .inject(WalletService);
    htttpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;


 wallet={
   currentBalance:4000,
   statements:null,
   userId:"id1",
   userName:"test",
   walletId:"walletid1"
 }

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("get wallet method check",(done:DoneFn)=>{

    htttpClientSpy.get.and.returnValue(of(wallet));
    service.getWallet().subscribe({
      next:(data)=>{
        expect(data).toEqual(wallet);
        done();
      },
      error:(err)=> {
        done.fail;
      }
    })

    expect(htttpClientSpy.get).toHaveBeenCalledTimes(1);

});



it("get statements method check",(done:DoneFn)=>{

  htttpClientSpy.get.and.returnValue(of(statements));
  service.getStatement(wallet.walletId).subscribe({
    next:(data)=>{
      expect(data).toEqual(statements);
      done();
    },
    error:(err)=> {
      done.fail;
    }
  })

  expect(htttpClientSpy.get).toHaveBeenCalledTimes(1);

});


it("add money method check",(done:DoneFn)=>{

  htttpClientSpy.post.and.returnValue(of(wallet));
  service.addMoney(wallet.walletId,1000).subscribe({
    next:(data)=>{
      expect(data).toEqual(wallet);
      done();
    },
    error:(err)=> {
      done.fail;
    }
  })

  expect(htttpClientSpy.post).toHaveBeenCalledTimes(1);

});


it("create wallet method check",(done:DoneFn)=>{

  htttpClientSpy.post.and.returnValue(of(wallet));
  service.createwallet().subscribe({
    next:(data)=>{
      expect(data).toEqual(wallet);
      done();
    },
    error:(err)=> {
      done.fail;
    }
  })

  expect(htttpClientSpy.post).toHaveBeenCalledTimes(1);

});


it("pay by wallet method check",(done:DoneFn)=>{

  htttpClientSpy.get.and.returnValue(of(wallet));
  service.payBywallet(1000,wallet.walletId).subscribe({
    next:(data)=>{
      expect(data).toEqual(wallet);
      done();
    },
    error:(err)=> {
      done.fail;
    }
  })

  expect(htttpClientSpy.get).toHaveBeenCalledTimes(1);

});


});
