import {Injectable} from '@angular/core';

@Injectable()
export class BandsDataService{

    private bandName:string;
private bandAddress:string;
private bandRatingNo:number;
private bandGenre:string;
private newItem:boolean;
private hotItem:boolean;

    constructor(bandName:string,bandAddress:string,bandGenre:string,bandRatingNo:number,newItem:boolean,hotItem:boolean){
        this.bandName=bandName;
        this.bandAddress=bandAddress;
        this.bandGenre=bandGenre;
        this.bandRatingNo=bandRatingNo;
        this.newItem=newItem;
        this.hotItem=hotItem;

    }
    public setBandName(data){
        this.bandName=data;
    }
    public getBandName(){
        return this.bandName;
    }
    public setBandAddress(data){
        this.bandAddress=data;
    }
    public getBandAddress(){
        return this.bandAddress;
    }
    public setBandGenre(data){
        this.bandGenre=data;
    }
    public getBandGenre(){
        return this.bandGenre;
    }
    public setBandRatingNo(data){
        this.bandRatingNo = data;
    }
    public getBandRatingNo(){
        return this.bandRatingNo;
    }
    public setNewItem(data){
        this.newItem=false;
    }
    public getNewItem(){
        return this.newItem;
    }
    public setHotItem(data){
        this.hotItem=false;
    }
    public getHotItem(){
        return this.hotItem;
    }
}