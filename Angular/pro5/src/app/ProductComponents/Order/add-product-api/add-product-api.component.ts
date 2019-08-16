import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ProductApi } from 'src/app/ViewModels/productApi';

@Component({
  selector: 'app-add-product-api',
  templateUrl: './add-product-api.component.html',
  styleUrls: ['./add-product-api.component.scss']
})
export class AddProductApiComponent implements OnInit {

  constructor(private Router :Router,private ProductApiService:ProductApiService) { }

  ngOnInit() {

  }

  goToAddProductApi(form)
  {
    
    //console.log( form.value.imgUrl.split('\\')[2]);
    
    let newProductApi=new ProductApi(this.ProductApiService.newIdOfProductApi,form.value.name,form.value.price,form.value.brand,form.value.model
     ,form.value.color,form.value.quantity,form.value.weight,form.value.details
     ,form.value.imgUrl.split('\\')[2]);


   this.ProductApiService.insertProduct(newProductApi)
   .subscribe(
     (data) => {console.log ("success add product"); this.Router.navigate(['/productApi']); },
     (err) => {console.log(err);
     });

     
   
  }

}
