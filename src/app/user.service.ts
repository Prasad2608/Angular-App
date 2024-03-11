import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpclient:HttpClient) {


   }

   saveToDB(user:User)
   {
        return this.httpclient.post("http://localhost:8080/saveToDB" , user);
   }
 
 validate(user:User)
 {
      return this.httpclient.post<boolean>("http://localhost:8080/validate" , user);
 }
 
 getUser(username:string){
     return this.httpclient.get<User>("http://localhost:8080/getUser/"+ username)
 }
 
 deleteUser(username:string){
   return this.httpclient.delete<Boolean>("http://localhost:8080/deleteUser/"+ username)
 }
 
 getAllUser(){
   return this.httpclient.get<User[]>("http://localhost:8080/getAllUser")
 
    }
}

export class User{

    username:string;
    password:string;
    mobno:number;
    emailId:string;

    constructor(username:string , password:string , mobno:number , emailId:string){

        this.username=username;
        this.password=password;
        this.mobno=mobno;
        this.emailId=emailId;



    }



}
