import { RouterModule, Routes } from "@angular/router";
import { ProductAddComponent } from "./components/product-add/product-add.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { ProductListComponent } from "./components/product-list/product-list.component";


const appRouters: Routes = [
    { path: "", component: ProductListComponent },
    { path: "new", component: ProductAddComponent },
    { path: "details/:id", component: ProductDetailsComponent }
];

export const routing = RouterModule.forRoot(appRouters);