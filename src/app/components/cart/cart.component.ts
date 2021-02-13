import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/service/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts: any[] | undefined;

  $cartProd: any;
  constructor(
    private cartService: CartServiceService,
  ) { }


  ngOnInit(): void {
    this.cartProducts = this.cartService.getItems();
    console.log(this.cartProducts);
  }

  deleteProdFromCart(e: any) {
    this.cartService.deleteItemCart(e);
  }

  get total() {
    return this.cartService.totalSumCart();
  }

  checkOut() {
    window.alert('Your order has been successfully received! Continue to keep the planet clean');
  }

}
