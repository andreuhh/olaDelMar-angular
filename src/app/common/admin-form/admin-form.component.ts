import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

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

  imgProvaPath: any;

  path: String;

  //downloadURL?: Observable<string>;
  //fb: any; //vedere

  constructor(
    private crudService: CrudService,
    private af: AngularFireStorage
  ) { }

  ngOnInit(): void {

  }

  upload($event) {
    this.path = $event.target.files[0]
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


    this.af.upload("/files" + Math.random() + this.path, this.path);

    console.log(this.imgProvaPath)
  }

}
