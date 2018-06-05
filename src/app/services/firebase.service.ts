import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  listing:  FirebaseObjectObservable<any[]>;
  constructor(private af: AngularFireDatabase) { }
  getListings(){
    this.listings = this.af.list('/listings') as FirebaseListObservable<Listing[]>
    return this.listings;

  }
  getListingDetails(id)
{
   this.listing= this.af.list('/listings/' +id) as FirebaseListObservable<Listing>
   return this.listing; 
  
}}
interface Listing{
  $ket?:string;
  title?:String;
  type?:string;
  image?:string;
  city?:string;
  owner?:string;
  bedrooms?:string;
}