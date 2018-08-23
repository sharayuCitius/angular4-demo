import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HttpResponse} from '@angular/common/http'
import  footballers from './models/footballers' ;






@Injectable({
  providedIn: 'root'
})
export class FootballServiceService {

  public Footballerslist:footballers[]=[];

constructor(public http:HttpClient) {
  this.Footballerslist.push({id:1,name:"David de Gea",position:"GK",rating:3,value : 41.1}); 
  this.Footballerslist.push({id:2,name:"Victor Lindelöf",position:"DF",rating:5,value : 44.2}); 
  this.Footballerslist.push({id:3,name:"Eric Bailly",position:"DF",rating:4,value : 42.9}); 
  this.Footballerslist.push({id:4,name:"Paul Pogba",position:"MF",rating:2,value : 127.2}); 
  this.Footballerslist.push({id:5,name:"Alexis Sánchez",position:"FW",rating:1,value : 85.1}); 
  this.Footballerslist.push({id:6,name:"Romelu Lukaku",position:"FW",rating:1,value : 142.2}); 
  this.Footballerslist.push({id:7,name:"Anthony Martial",position:"FW",rating:4,value : 72.8}); 
  this.Footballerslist.push({id:8,name:"Juan Mata",position:"MF",rating:4,value : 14.9}); 
  this.Footballerslist.push({id:9,name:"Jesse Lingard",position:"MF",rating:1,value : 48.9}); 
  this.Footballerslist.push({id:10,name:"Ashley Young",position:"DF",rating:4,value : 7.8}); 
  this.Footballerslist.push({id:11,name:"Sergio Romero",position:"GK",rating:3,value : 4.7}); 
  this.Footballerslist.push({id:12,name:"Joel Castro Pereira",position:"GK",rating:4,value : 41.1}); 
  this.Footballerslist.push({id:13,name:"Matteo Darmian",position:"DF",rating:3,value : 7.8}); 
  this.Footballerslist.push({id:14,name:"Marouane Fellaini",position:"MF",rating:4,value : 4.9}); 
  this.Footballerslist.push({id:15,name:"Nemanja Matić",position:"MF",rating:4,value : 55.9}); 
  this.Footballerslist.push({id:16,name:"Luke Shaw",position:"DF",rating:4,value : 10.3}); 
  this.Footballerslist.push({id:17,name:"Timothy Fosu-Mensah",position:"DF",rating:4,value : 41.1}); 
  this.Footballerslist.push({id:18,name:"Jesse Lingard",position:"MF",rating:3,value : 48.9}); 
  this.Footballerslist.push({id:19,name:"Fred",position:"MF",rating:4,value : 41.1}); 
  this.Footballerslist.push({id:19,name:"Fred",position:"MF",rating:4,value : 41.1}); 
  // add comment




  
 }

//Call Football Api

 public GetAllFootballers():Observable<footballers[]>
  {
    
    return this.http.get<footballers[]>("http://localhost:3000/footballers");
    
}


}
