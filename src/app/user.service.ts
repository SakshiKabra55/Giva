import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable()
export class UserService {

   constructor( private firestore: AngularFirestore ) {}

  getUsers(){
   return this.firestore.collection("users").valueChanges()
  }

}