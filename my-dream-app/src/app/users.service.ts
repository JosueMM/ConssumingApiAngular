import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

import { User } from "../user";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = "http://localhost:3000/";

  constructor(private http: Http) { }


  getUsers(){
    return this.http.get(`${this.baseUrl}`);
  }

  addUser(newUser: User){
    return this.http.post(`${this.baseUrl}`,newUser)
  }

  updateUser(newUser: User){
    return this.http.put(`${this.baseUrl}/${newUser.id}`,newUser)
  }

  deleteUser(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

}
