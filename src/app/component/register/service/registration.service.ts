import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../../login/service/auth-guard.service';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private postRegisterationApi:string
  private getUserApi:string



  constructor(private http: HttpClient,private loginService:AuthGuardService) {
    this.postRegisterationApi="http://localhost:1000/profile-service/api/user";
    this.getUserApi="http://localhost:1000/profile-service/api/user";
  }

  public postRegisteration(user:User):Observable<User>{
    return this.http.post<User>(this.postRegisterationApi,user);
// {headers: { authorization:
//   localStorage.getItem("auth") } })

  }

  public getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.getUserApi);

// {headers: { authorization:
//   localStorage.getItem("auth") } })

  }

}
