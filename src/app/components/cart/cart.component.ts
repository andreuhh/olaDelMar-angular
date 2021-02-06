import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/service/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartServiceService) { }
  cartProducts: any[] | undefined;
  $cartProd: any;

  ngOnInit(): void {
    this.cartProducts = this.cartService.getItems();
  }

}
