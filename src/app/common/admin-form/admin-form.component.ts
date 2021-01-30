import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent implements OnInit {
  product: Product = {
    name: "",
    category: "",
    imgUrl: "",
    description: "",
    price: undefined,
  }


  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.product.name != '' || this.product.category != '' || this.product.imgUrl != '' || this.product.description != '') {
      this.crudService.addItem(this.product);

      this.product.name = "";
      this.product.category = "";
      this.product.imgUrl = "";
      this.product.description = "";
      this.product.price = undefined;
    }
  }
}
