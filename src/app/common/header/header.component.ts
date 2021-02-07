import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/service/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hamburgerMenuOpen = false;
  cartProducts: any[] | undefined;

  constructor(
    private cartService: CartServiceService,
  ) { }

  ngOnInit(): void {
    this.cartProducts = this.cartService.getItems();
    console.log(this.cartProducts.length);
  }

  clickMenu(): void { this.hamburgerMenuOpen = !this.hamburgerMenuOpen }

}
