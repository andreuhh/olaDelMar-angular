import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {
  products: Product[] = [];
  name: any;

  loading = false;

  constructor(
    public crudService: CrudService,
    private router: Router,
    private cartService: CartServiceService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.crudService.getItems().subscribe(allProducts => {
      console.log(allProducts);
      this.loading = false;
      this.products = allProducts;
    });
  }

  sendObjects(product: any) {
    this.router.navigate(['/detail/' + product.id], {
      state: {
        product: JSON.stringify(product),
      },
    });
  }

  Search() {
    if (this.name != '') {
      this.products = this.products.filter((product) => product.name.toLowerCase().match(this.name));
    } else if (this.name == '') {
      this.ngOnInit();
    }
  }

  addToCart(prod: any) {
    this.cartService.addToCart(prod);
    window.alert('Your product has been added to the cart!');
  }

}
