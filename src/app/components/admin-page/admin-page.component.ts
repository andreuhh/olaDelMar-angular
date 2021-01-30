import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  category: string;
  description: string;
  imgUrl: string;
  name: string;
  price: number;

  message: string;

  constructor(
    public crudService: CrudService
  ) { }

  ngOnInit(): void {
  }

  createProduct() {
    let Product = {};
    Product['category'] = this.category;
    Product['description'] = this.description;
    Product['imgUrl'] = this.imgUrl;
    Product['name'] = this.name;
    Product['price'] = this.price;

    this.crudService.create_Newproduct(Product).then(res => {
      //remove input fields after submit
      this.name = "";
      this.category = "";
      this.imgUrl = "";
      this.description = "";
      this.price = undefined;
      console.log(res);
      this.message = "new product saved correctly !";
    }).catch(error => {
      console.log(error);
    })
  }

}
