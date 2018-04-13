import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpParams,HttpClientModule,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {bandDatabase} from '../suggestions/bandDatabase';
import{eventDatabase} from '../suggestions/eventDatabase';

@Injectable()
export class AppServices{
    
    
   
constructor(){
    
}
public pushBandName(){
    var i;
    var list =[];
    for(i=0;i< bandDatabase.Json.bands.length;i++)
    {
         var names = bandDatabase.Json.bands[i].bandName;
         list.push(names);
    }
    return list;
}
public pushBandAddress(){
    var i;
    var list =[];
    for(i=0;i< bandDatabase.Json.bands.length;i++)
    {
         var names = bandDatabase.Json.bands[i].bandAddress;
         list.push(names);
    }
    return list;
}
public pushBandGenre(){
    var i;
    var list =[];
    for(i=0;i< bandDatabase.Json.bands.length;i++)
    {
         var names = bandDatabase.Json.bands[i].bandGenre;
         list.push(names);
    }
    return list;
}
public pushEventName(){
    var i;
    var list =[];
    for(i=0;i< eventDatabase.Json.events.length;i++)
    {
         var names = eventDatabase.Json.events[i].eventName;
         list.push(names);
    }
    return list;
}
public pushEventAddress(){
    var i;
    var list =[];
    for(i=0;i< eventDatabase.Json.events.length;i++)
    {
         var names = eventDatabase.Json.events[i].eventAddress;
         list.push(names);
    }
    return list;
}

public pushEventPrice(){
    var i;
    var list =[];
    for(i=0;i< eventDatabase.Json.events.length;i++)
    {
         var price = eventDatabase.Json.events[i].eventPrice;
         list.push(price);
    }
    return list;
}
public pushEventRatingNo(){
    var i;
    var list =[];
    for(i=0;i< eventDatabase.Json.events.length;i++)
    {
         var ratingNo = eventDatabase.Json.events[i].eventRatingNo;
         list.push(ratingNo);
    }
    return list;
}
public pushEventDescription(){
    var i;
    var list =[];
    for(i=0;i< eventDatabase.Json.events.length;i++)
    {
         var names = eventDatabase.Json.events[i].eventDescription;
         list.push(names);
    }
    return list;
}
public pushEventImage(){
    var i;
    var list =[];
    for(i=0;i< eventDatabase.Json.events.length;i++)
    {
         var names = eventDatabase.Json.events[i].eventImage;
         list.push(names);
    }
    return list;
}

public pushVenueName(){
    var i;
    var list =[];
    for(i=0;i< eventDatabase.Json.events.length;i++)
    {
         var names = eventDatabase.Json.events[i].venueName;
         list.push(names);
    }
    return list;
}



 
}


// console.log(Database.Json.bands.length);
// console.log(Database.Json.bands[0].name);
// console.log(Database.Json.bands[1].name);

 