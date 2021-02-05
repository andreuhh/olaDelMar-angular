import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {
  products: Product[];

  constructor(
    public crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.getItems().subscribe(allProducts => {
      console.log(allProducts);
      this.products = allProducts;
    });
  }

}
