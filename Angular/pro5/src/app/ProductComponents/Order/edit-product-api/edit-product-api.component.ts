import { Component, OnInit } from '@angular/core';
import { ProductApi } from 'src/app/ViewModels/productApi';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-edit-product-api',
  templateUrl: './edit-product-api.component.html',
  styleUrls: ['./edit-product-api.component.scss']
})
export class EditProductApiComponent implements OnInit {
  
  productDetails:ProductApi;
  
  _id : number;
  name : string;
  price : number ;
  brand : number ;
  model : number ;
  color : string ; 
  quantity : number ;
  weight : number;
  details : string;

  constructor(private activatedRoute:ActivatedRoute,private ProductApiService:ProductApiService,
    private Router:Router) {

      this.productDetails=new ProductApi();

     }

ngOnInit() {

let productName=this.activatedRoute.snapshot.paramMap.get('productName');
//console.log(productName);

this.ProductApiService.getProduct(productName)
  .subscribe(data=>{

      this.productDetails=new ProductApi(data[0]._id,data[0].name,data[0].price,data[0].brand,data[0].model,
      data[0].color,data[0].quantity,data[0].weight);
              
      // console.log(data[0]);

  this._id  = data[0]._id;
  this.name = data[0].name;
  this.price = data[0].price ;
  this.brand = data[0].brand ;
  this.model = data[0].model ;
  this.color = data[0].color ; 
  this.quantity = data[0].quantity ;
  this.weight = data[0].weight;
  this.details = data[0].details;
  })

  }

  goToEditProduct(form)
  {
     
     //console.log( form.value);

     let Id=this.activatedRoute.snapshot.paramMap.get('productId');
     let editProductApi=new ProductApi(parseInt(Id),form.value.name,form.value.price,form.value.brand,form.value.model
      ,form.value.color,form.value.quantity,form.value.weight);


    this.ProductApiService.editProduct(form.value.name,editProductApi).subscribe(
      (res) => {console.log ("success edit product");
      this.Router.navigate(['/productApi']); },
      (err) => {console.log(err);} 
      );

      
    
  }

}


  
  
