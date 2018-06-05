import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FirebaseService } from './services/firebase.service';
import { AngularFireModule } from 'angularfire2';
import { auth } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { OAuthProvider, GoogleAuthProvider } from '@firebase/auth-types';

import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCwNietemmvLu2h42z1VSlwUv68ILjalF8",
  authDomain: "proplistings-a560a.firebaseapp.com",
  databaseURL: "https://proplistings-a560a.firebaseio.com",
  projectId: "proplistings-a560a",
  storageBucket: "proplistings-a560a.appspot.com",
  messagingSenderId: "39304523879"

};

const firebaseAuthConfig={
  provider: GoogleAuthProvider,
};

const appRoutes: Routes = [
  {path:'',component:HomeComponent },
  {path:'listings',component:ListingsComponent },
  {path:'listing/:id',component:ListingComponent },
  {path:'add-listing',component:AddListingComponent },
  
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
