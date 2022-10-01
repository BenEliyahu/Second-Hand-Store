import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Product from 'src/app/models/product.model';
import ProductService from 'src/app/services/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  sortBool: boolean = false;


  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.get()
                    .subscribe((data)=> {
                      let products = data as Product[];
                      products = products.sort((a, b)=>a.price-b.price);
                      this.products = products;                    
                    });
  }

  onItemDeleteHandler(id: any) {
    this.products = this.products.filter(product => product.id != id);
  }


  sortPrice() {
    if(this.sortBool === false) {
      this.products.sort((a, b) => b.price - a.price);
      this.sortBool = true;
    }
    else {
      this.products.sort((a, b) => a.price - b.price);
      this.sortBool = false;
    }
  }
  sortDate() {
    if(this.sortBool === false) {
      this.products.sort((a, b) => <any>new Date(b.date)- <any>new Date(a.date));
      this.sortBool = true;
    }
    else {
      this.products.sort((a, b) => <any>new Date(a.date)- <any>new Date(b.date));
      this.sortBool = false;
    }
  }
}
