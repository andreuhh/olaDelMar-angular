import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  name: string;
  description: string;
  price: number;

  message: string;

  constructor(
    public crudService: CrudService
  ) { }

  ngOnInit(): void {
  }

  createProduct() {
    let Product = {};
    Product['name'] = this.name;
    Product['description'] = this.description;
    Product['price'] = this.price;

    this.crudService.create_Newproduct(Product).then(res => {
      this.name = "";
      this.description = "";
      this.price = undefined;
      console.log(res);
      this.message = "new product saved correctly !";
    }).catch(error => {
      console.log(error);
    })
  }

}
