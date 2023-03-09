import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateUser, User } from '../model/user.model';





@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  getUserDetailsApi:string;
  updateUserApi:string;

  constructor(private http:HttpClient) {

    this.getUserDetailsApi="http://localhost:8095/api/user/";
    this.updateUserApi="http://localhost:8095/api/update/user/";
  }

  getUserDetails(userId: string) :Observable<User>{
    return this.http.get<User>(this.getUserDetailsApi+userId);
  }

  updateUser(userId: string,userDetails:UpdateUser):Observable<User>{
    return this.http.put<User>(this.updateUserApi+userId,userDetails);
  }
}
