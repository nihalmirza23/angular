import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateUser, User } from '../../login/model/User.model';
import { ProfileServiceService } from '../service/profileservice.service';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css']
})
export class ProfileHomeComponent implements OnInit {

  user:User;
  updateProfileModal:boolean;
  updateForm:FormGroup;
  updateUser:UpdateUser;


  constructor(private profileService:ProfileServiceService) {

    this.updateProfileModal = false;

    this.updateUser={address:{
    }};

    this.user={"address":null,dateOfBirth:null,email:"",fullName:"",gender:"",id:"",mobileNo:"",password:"",
    plainTextPassword:"",role:"",userName:""
            };

    this.updateForm = new FormGroup(
      {
        "fullName":new FormControl(),
         "email": new FormControl(null),
          "mobileNo":new FormControl(null,
            [
              // Validators.required,
              // Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$'),
            ]),
          "gender":new FormControl(null),
          "dateOfBirth":new FormControl(null),
          "houseNumber":new FormControl(null),
          "streetName":new FormControl(),
          "colonyName":new FormControl(null),
          "city":new FormControl(null),
          "state":new FormControl(null),
          "pinCode":new FormControl(null)
      }
    );

   }

  ngOnInit(): void {
   let userId = localStorage.getItem('userId');
   console.log(userId);
  this.profileService.getUserDetails(userId).subscribe(
    data=>{
      console.log(data);
      this.user=data;
    },
    error=>{
      alert("error")
    }
  );
  }

  updateProfile(){
    this.updateProfileModal = !this.updateProfileModal;
  }

  onSubmit(){
    let userId = localStorage.getItem('userId');
    console.log("abc");
    console.log(this.updateForm.value);
    this.updateUser.fullName=this.updateForm.value.fullName;
    this.updateUser.email=this.updateForm.value.email;
    this.updateUser.dateOfBirth=this.updateForm.value.dateOfBirth;
    this.updateUser.mobileNo=this.updateForm.value.mobileNo;
    this.updateUser.gender=this.updateForm.value.gender;
    this.updateUser.address.houseNumber=this.updateForm.value.houseNumber;
    this.updateUser.address.streetName=this.updateForm.value.streetName;
    this.updateUser.address.colonyName=this.updateForm.value.colonyName
    this.updateUser.address.city=this.updateForm.value.city;
    this.updateUser.address.state=this.updateForm.value.state;
    this.updateUser.address.pinCode=this.updateForm.value.pinCode;
    console.log(this.updateUser);

    this.profileService.updateUser(userId,this.updateUser).subscribe(data=>{
      this.user=data;
      console.log(data);
    });
    alert("profile updated successfully");
  }
}
