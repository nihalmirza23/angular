import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from '../model/User.model';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService{
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username: string;
  public password: string;

  getUserApi:string;

  constructor(private http:HttpClient,private router:Router) {
    this.getUserApi="http://localhost:8095/api/user/username/";
    this.username="";
    this.password="";
 }

 authenticationService(username: string, password: string) {
  return this.http.get(this.getUserApi+username,
    { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
      this.username = username;
      this.password = password;
      this.registerSuccessfulLogin(username, password);
    }));
}

createBasicAuthToken(username: string, password: string) {
  return 'Basic ' + window.btoa(username + ":" + password)
}

registerSuccessfulLogin(username:string, password:string) {
  localStorage.setItem("auth",this.createBasicAuthToken(username,password))
  sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME,username);
}

isUserLoggedIn() {
  let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
  if (user === null) return false
  return true
}

getLoggedInUserName() {
  let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
  if (user === null) return ''
  return user
}

getUserByUsername(username:string):Observable<User>{
  let token1:string|null=localStorage.getItem("auth");
  let token="";
  console.log(token1);
  return this.http.get<User>(this.getUserApi+username, { headers: { authorization:token1 || token} });
 }


}
