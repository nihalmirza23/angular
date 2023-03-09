import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { User } from '../login/model/User.model';
import { ProfileServiceService } from '../profile/service/profileservice.service';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

userId:string;
loggedIn:boolean;
username:string;
errorMsg:string;
cartItem:number;
user:User;
isMerchant:boolean;


  constructor(private appService: AppService,private profileService:ProfileServiceService) {
    this.loggedIn=false;
    this.cartItem=0;
    this.isMerchant=false;



    this.appService.loggedIn.subscribe(data=>{
      this.loggedIn=data;
  });

  this.appService.isMerchant.subscribe(data=>{
    this.isMerchant=data;
  });

  this.cartItem=0;

  this.appService.cartItems.subscribe(data=>{
    this.cartItem=data;
  })
}


  ngOnInit(): void {


this.appService.isMerchant.subscribe(data=>{
  this.isMerchant=data;
});




    this.appService.loggedIn.subscribe(data=>{

      let status = localStorage.getItem('isLoggedIn');
        if(status){
            this.loggedIn = true;
            let token = localStorage.getItem('token');
            token = atob(token);
            this.username = token.split(":")[0];
        }
        else{
            this.loggedIn = false;
        }
  });

    }

    onLogOut(){
      this.appService.cartItems.next(0);
      localStorage.removeItem('token');
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userId');
      localStorage.removeItem('userRole');
      this.loggedIn = false;
      alert("user logged out");
    }



  }


