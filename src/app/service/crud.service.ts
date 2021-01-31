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
  productDoc: AngularFirestoreDocument<Product>;

  constructor(public fireservicies: AngularFirestore) {
    //this.products = this.fireservicies.collection('shopitem').valueChanges();

    this.productsCollection = this.fireservicies.collection('shopitem', ref => ref.orderBy('name', 'asc'));

    this.products = this.productsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Product;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getItems() {
    return this.products;
  }

  addItem(product: Product) {
    this.productsCollection.add(product);
  }

  deleteProduct(product: Product) {
    this.productDoc = this.fireservicies.doc(`shopitem/${product.id}`);
    this.productDoc.delete();
  }

  updateProduct(product: Product) {
    this.productDoc = this.fireservicies.doc(`shopitem/${product.id}`);
    this.productDoc.update(product);
  }

}


