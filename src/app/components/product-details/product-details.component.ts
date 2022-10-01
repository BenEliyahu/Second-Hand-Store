import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Product from 'src/app/models/product.model';
import ProductService from 'src/app/services/product.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: string = "";
  product: Product = new Product();
  products: Product[] = [];

  constructor(private productService: ProductService, private route: ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {      
        this.id = params["id"];
        this.productService.getById(parseInt(this.id)).subscribe((data)=>{
          this.product = data as Product;
        })
    });
  }

  Purchase(id: number){
    this.productService.delete(id)
                    .subscribe(data=> {
                      this.products = this.products.filter(item => item.id != id);
                      this.router.navigateByUrl("");
                    },
                    error => alert(error))
  }
}
