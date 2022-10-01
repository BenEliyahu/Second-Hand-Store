import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Product from 'src/app/models/product.model';
import ProductService from 'src/app/services/product.service';
import { ValidateImageFileType } from 'src/app/validators/imageType.validator';
import { ValidatePhoneNumber } from 'src/app/validators/phone.validator';
import { ValidateUrl } from 'src/app/validators/url.validator';

@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  newProduct : Product = new Product();

  newItemForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),
    description: new FormControl("", [Validators.required, Validators.minLength(5)]),
    imageSource: new FormControl("", [ValidateUrl, ValidateImageFileType]),
    price: new FormControl("", [Validators.required, Validators.min(10)]),
    city: new FormControl("", [Validators.required, Validators.minLength(2)]),
    phoneNumber: new FormControl("", [Validators.required, Validators.minLength(9),Validators.maxLength(9),ValidatePhoneNumber]),
  });

  saveForm() {
    let name = this.newItemForm.controls["name"].value;
    let description = this.newItemForm.controls["description"].value;
    let imageSource = this.newItemForm.controls["imageSource"].value;
    let price = this.newItemForm.controls["price"].value;
    let city = this.newItemForm.controls["city"].value;
    let phoneNumber = this.newItemForm.controls["phoneNumber"].value;
    this.newProduct = new Product(0, name,description,imageSource,price,city,phoneNumber);
    if (this.newItemForm.valid) {
      this.addNewItem();
    }
  }

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
  }


  addNewItem() {
    this.productService.post(this.newProduct)
      .subscribe(data => {
        this.router.navigateByUrl("");
      })
  }
}
