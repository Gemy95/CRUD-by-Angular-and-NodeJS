import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ProductApi } from 'src/app/ViewModels/productApi';


@Component({
  selector: 'app-show-product-api',
  templateUrl: './show-product-api.component.html',
  styleUrls: ['./show-product-api.component.scss']
})
export class ShowProductApiComponent implements OnInit {
  
  productDetails:ProductApi;
  
  constructor(private activatedRoute:ActivatedRoute,private ProductApiService:ProductApiService) {

    this.productDetails=new ProductApi();

   }

ngOnInit() {

let productName=this.activatedRoute.snapshot.paramMap.get('productName');
//console.log(productName);

this.ProductApiService.getProduct(productName)
  .subscribe((data)=>{
      /*
      this.productDetails=new ProductApi(data[0]._id,data[0].name,data[0].price,data[0].brand,data[0].model,
      data[0].color,data[0].quantity,data[0].weight,data[0].imgUrl);
      */
      this.productDetails=data[0];
      
       //console.log(data[0]);
  })

  }
}


  
  
