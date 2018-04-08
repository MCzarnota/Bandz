import {Injectable} from '@angular/core';

@Injectable()
export class EventsDataService{

private eventName:string;
private venueAddress:string;
private venueName:string;
private eventPrice:number;
private eventRatingNo:number;
private newItem:boolean;
private hotItem:boolean;



constructor(eventName:string,venueAddress:string,venueName:string,eventPrice:number,eventRatingNo:number,newItem:boolean,
    hotItem:boolean){
        this.eventName=eventName;
        this.venueAddress=venueAddress;
        this.venueName=venueName;
        this.eventPrice=eventPrice;
        this.eventRatingNo=eventRatingNo;
        this.newItem=newItem;
        this.hotItem=hotItem;

        
      
       
}

public setEventName(data){
    this.eventName = data;

}
public getEventName(){
    return this.eventName;
}
public setVenueAddress(data){
    this.venueAddress = data;
}

public getVenueAddress(){
    return this.venueAddress;
}
public setVenueName(data){
    this.venueName = data;
}
public getVenueName(data){
    return this.venueName;
}
public setEventPrice(data){
    this.eventPrice = data;
}
public getEventPrice(){
    return this.eventPrice;
}
public setEventRatingNo(data){
    this.eventRatingNo = data;
}
public getEventRatingNo(){
    return this.eventRatingNo;
}
public setNewItem(data){
    this.newItem = false;
}
public getNewItem(){
    return this.newItem;
}
public setHotItem(data){
    this.hotItem = false;
}
public getHotItem(){
    return this.hotItem;
}
// public getEventsArrayName(){

//     for(let x of this.events){
//         return this.events[0]
//     }
// }
}