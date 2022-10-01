import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Product from "../models/product.model";

@Injectable()
export default class ProductService {

    constructor(private httpService: HttpClient) {
    }

    get(){
        return this.httpService.get("http://localhost:4100/products");
    }

    getById(id: number){
        return this.httpService.get("http://localhost:4100/products/" + id);
    }

    post(product: Product){
        return this.httpService.post("http://localhost:4100/products", product);
    }

    delete(id: any){
        return this.httpService.delete("http://localhost:4100/products/" + id);
    }

    put(product: Product){
        return this.httpService.put("http://localhost:4100/products/" + product.id, product);
    }
}