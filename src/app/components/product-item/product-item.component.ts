import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Product from 'src/app/models/product.model';
import ProductService from 'src/app/services/product.service';
@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: any;
  products: Product[] = [];
  @Output() ondelete: EventEmitter<any> = new EventEmitter<any>();
  constructor(private productService: ProductService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  Purchase(id: number){
    this.productService.delete(id)
                    .subscribe(data=> {
                      this.products = this.products.filter(item => item.id != id);
                    },
                    error => alert(error))
  }

  // addNewProduct(product: Product) {
  //   this.products.push(product);
  // }
  goToDetails(id:number){
    this.router.navigateByUrl("/details/"+id);
  }

}
