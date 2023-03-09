import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Address } from '../model/address.model';
import { User } from '../model/user.model';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-ragister-home',
  templateUrl: './ragister-home.component.html',
  styleUrls: ['./ragister-home.component.css']
})
export class RagisterHomeComponent implements OnInit {

  users:User[];

  registrationForm:FormGroup;
  addressForm:FormGroup;
  user:User;
  address:Address;


  constructor(private registrationService:RegistrationService ) { }

  ngOnInit(): void {
    this.registrationService.getUsers().subscribe(data=>{
      this.users=data;

    });

    this.registrationForm=new FormGroup({
      fullName:new FormControl(''),
      userName:new FormControl(''),
      password:new FormControl(''),
      mobileNo:new FormControl(''),
      email:new FormControl(''),
      role:new FormControl(''),
      dateOfBirth:new FormControl(''),
      gender:new FormControl(''),

    });
      this.addressForm=new FormGroup({
        houseNumber:new FormControl(''),
        streetName:new FormControl(''),
        colonyName:new FormControl(''),
        city:new FormControl(''),
        state:new FormControl(''),
        pinCode:new FormControl('')
      });

  }

  onPostRegistration(){
    this.address={
      houseNumber:this.addressForm.value.houseNumber,
      streetName:this.addressForm.value.streetName,
      colonyName:this.addressForm.value.colonyName,
      city:this.addressForm.value.city,
      state:this.addressForm.value.state,
      pinCode:this.addressForm.value.pinCode
    }

    this.user={
      fullName:this.registrationForm.value.fullName,
      userName:this.registrationForm.value.userName,
      plainTextPassword:this.registrationForm.value.password,
      password:this.registrationForm.value.password,
      mobileNo:this.registrationForm.value.mobileNo,
      email:this.registrationForm.value.email,
      gender:this.registrationForm.value.gender,
      dateOfBirth:this.registrationForm.value.dateOfBirth,
      role:this.registrationForm.value.role,
      address:this.address
    }


    this.registrationService.postRegisteration(this.user).subscribe(data=>{
      this.users.push(data);

    })
    alert("Registration successful!!")
  }



}
