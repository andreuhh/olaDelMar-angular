import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private cartService: CrudService,
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

  ngOnInit() {
    /*this.crudService.getItems().subscribe(allProducts => {
      console.log(allProducts);
      this.products = allProducts;
    });*/
    //this.product = this.route.snapshot.paramMap.get("id");
    //console.log(this.product)
  }

}
