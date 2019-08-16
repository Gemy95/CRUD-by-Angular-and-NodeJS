import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OrderMasterComponent } from './ProductComponents/Order/order-master/order-master.component';
import { OrderDetailsComponent } from './ProductComponents/Order/order-details/order-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './otherComponents/home/home.component';
import { NotFoundComponent } from './otherComponents/not-found/not-found.component';
import { ShowDetailsComponent } from './otherComponents/show-details/show-details.component';
import { ProductApiComponent } from './ProductComponents/Order/product-api/product-api.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowProductApiComponent } from './ProductComponents/Order/show-product-api/show-product-api.component';
import { EditProductApiComponent } from './ProductComponents/Order/edit-product-api/edit-product-api.component';
import { AddProductApiComponent } from './ProductComponents/Order/add-product-api/add-product-api.component';

//note : first match win (wildcard algorithm)
const routes: Routes = [

  { path: 'product', component: OrderMasterComponent },
  { path: 'productApi', component: ProductApiComponent },
  { path: 'productBuyApi' , redirectTo:'/productApi' ,  pathMatch:'full' },
  { path: 'showProductApi/:productName', component: ShowProductApiComponent },
  { path: 'editProductApi/:productName/:productId', component: EditProductApiComponent },
  { path: 'addProductApi' , component:AddProductApiComponent},
  { path: 'home', component: HomeComponent },
  { path: 'showProduct', component: HomeComponent },
  { path: '', redirectTo:'home' , pathMatch:'full' },
  { path: 'product/:id', component:ShowDetailsComponent },
  { path: '**' ,component:NotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    OrderMasterComponent,
    OrderDetailsComponent,
    HomeComponent,
    NotFoundComponent,
    ShowDetailsComponent,
    ProductApiComponent,
    ShowProductApiComponent,
    EditProductApiComponent,
    AddProductApiComponent,
   
  ],
  imports: [
    BrowserModule
    ,FormsModule, AppRoutingModule,
    RouterModule.forRoot(routes) ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
