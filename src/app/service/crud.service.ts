import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservicies: AngularFirestore) { }

  create_Newproduct(Product) {
    return this.fireservicies.collection('shopitem').add(Product)
  }
}
