import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[];

  constructor(
    public crudService: CrudService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.crudService.getItems().subscribe(allProducts => {
      console.log(allProducts);
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

}
