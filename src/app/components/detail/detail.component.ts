import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { CrudService } from 'src/app/service/crud.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  products: Product[] = [];
  product: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartServiceService,
    public crudService: CrudService
  ) {

    if (this.router.getCurrentNavigation()?.extras.state) {
      let routerState = this.router.getCurrentNavigation()?.extras.state;
      if (routerState) {
        this.product = routerState.product ? JSON.parse(routerState.product) : [];
        console.log(this.product)
      }
    }
  }

  ngOnInit() { }

  addToCart(prod: any) {
    this.cartService.addToCart(prod);
    window.alert('Your product has been added to the cart!');
  }

}
