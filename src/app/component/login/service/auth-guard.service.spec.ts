import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { LoginHomeComponent } from '../login-home/login-home.component';
import { User } from '../model/User.model';

import { AuthGuardService } from './auth-guard.service';

describe('LoginService', () => {
  let component: LoginHomeComponent;
  let fixture: ComponentFixture<LoginHomeComponent>;

  let service: AuthGuardService;
  let user:User;

  let htttpClientSpy:jasmine.SpyObj<HttpClient>;


  beforeEach(async () => {
    let htttpClientSpyObj = jasmine.createSpyObj('HttpClient',['get','post','put','delete']);
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers:[AuthGuardService,
        {
          provide : HttpClient,
          useValue : htttpClientSpyObj
        }

      ],
      declarations: [ LoginHomeComponent ]

    })
    .compileComponents();

    service = TestBed .inject(AuthGuardService);
    htttpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    user={
    address:
    {

    },
    dateOfBirth:null,
    email:"testmail@gmail.com",
    fullName:"test test",
    gender:"male",
    id:"id1",
    mobileNo:"7727228223",
    password:"",
    plainTextPassword:"",
    role:"customer",
    userName:"test"

          }

  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("get user by username method check",(done:DoneFn)=>{

    htttpClientSpy.get.and.returnValue(of(user));
    service.getUserByUsername(user.userName).subscribe({
      next:(data)=>{
        expect(data).toEqual(user);
        done();
      },
      error:(err)=> {
        done.fail;
      }
    })

    expect(htttpClientSpy.get).toHaveBeenCalledTimes(1);

});




});
