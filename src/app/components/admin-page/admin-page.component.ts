import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  products: Product[];
  editState: boolean = false;
  productToEdit: Product;
  loading = false;

  constructor(
    public crudService: CrudService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.crudService.getItems().subscribe(allProducts => {
      console.log(allProducts);
      this.products = allProducts;
      this.loading = false;
    });
  }

  deleteProduct(event, product: Product) {
    this.clearState();
    this.crudService.deleteProduct(product);
  }

  editProduct(event, product: Product) {
    this.editState = true;
    this.productToEdit = product;
  }

  updateProduct(product: Product) {
    this.crudService.updateProduct(product);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.productToEdit = null;
  }

}
