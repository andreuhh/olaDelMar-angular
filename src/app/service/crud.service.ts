import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;

  // brad
  constructor(public fireservicies: AngularFirestore) {
    //this.products = this.fireservicies.collection('shopitem').valueChanges();

    this.productsCollection = this.fireservicies.collection('shopitem');

    this.products = this.productsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Product;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  // brad
  getItems() {
    return this.products;
  }

  //brad
  addItem(product: Product) {
    this.productsCollection.add(product);
  }

  // old
  /*create_Newproduct(Product) {
    return this.fireservicies.collection('shopitem').add(Product);
  }*/
}


