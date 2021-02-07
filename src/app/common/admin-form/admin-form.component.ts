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
  imgProvaPath: any;
  myform: FormGroup;
  isSubmitted?: boolean;

  product: Product = {
    name: "",
    category: "",
    imgUrl: "",
    description: "",
    price: undefined,
  }

  path: String;

  //downloadURL?: Observable<string>;
  //fb: any; //vedere

  constructor(
    private crudService: CrudService,
    private af: AngularFireStorage
  ) {
    this.myform = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      imgUrl: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }

  upload($event) {
    this.path = $event.target.files[0]
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.product.name != '' || this.product.category != '' || this.product.imgUrl != '' || this.product.description != '') {
      this.crudService.addItem(this.product);

      this.product.name = "";
      this.product.category = "";
      this.product.imgUrl = "";
      this.product.description = "";
      this.product.price = undefined;

      this.isSubmitted = false;
      window.alert('Product added in your shop!');
    }


    this.af.upload("/files" + Math.random() + this.path, this.path);

    console.log(this.imgProvaPath)
  }

  get formControls() {
    return this.myform['controls'];
  }
}
