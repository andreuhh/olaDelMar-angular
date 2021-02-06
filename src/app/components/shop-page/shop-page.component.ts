import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {
  products: Product[] = [];
  name: any;
  // NB URL IMMAGINE CORRETTA
  //url?: firebase.default.storage.UploadTaskSnapshot;

  constructor(
    public crudService: CrudService,
    private router: Router
  ) { }

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

  Search() {
    if (this.name != '') {
      this.products = this.products.filter((product) => product.name.toLowerCase().match(this.name));
    } else if (this.name == '') {
      this.ngOnInit();
    }
  }

}
