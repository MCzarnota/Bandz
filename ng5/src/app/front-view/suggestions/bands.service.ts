import {Injectable} from '@angular/core';

@Injectable()
export class BandsDataService {

private bandName: string;
private bandAddress: string;
private bandRatingNo: number;
private bandGenre: string;
private bandPrice: number;
private bandAvailability: boolean;
private bandDescription: string;
private bandMusic:string;
private bandImage:string;
private newItem:boolean;
private hotItem:boolean;

constructor(bandName:string,bandAddress:string,bandImage: string,bandMusic:string,
           bandDescription:string,bandAvailability:boolean,bandGenre:string,
           bandPrice:number,bandRatingNo:number,newItem:boolean,hotItem:boolean) {
        this.bandName=bandName;
        this.bandAddress=bandAddress;
        this.bandImage = bandImage;
        this.bandGenre=bandGenre;
        this.bandRatingNo=bandRatingNo;
        this.newItem=newItem;
        this.hotItem=hotItem;
        this.bandPrice = bandPrice;
        this.bandAvailability = bandAvailability;
        this.bandDescription = bandDescription;
        this.bandMusic=bandMusic;

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
