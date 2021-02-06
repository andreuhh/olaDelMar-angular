import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  products = Array();

  constructor() { }

  addToCart(product: any) {
    this.products.push(product);
  }

  getItems() {
    return this.products;
  }
}
