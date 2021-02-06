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

  deleteItemCart(e: number) {
    this.products.splice(e, 1);
  }

  totalSumCart() {
    const total = this.products.reduce((sum, products) => sum + products.price, 0);
    return total;
  }
}
