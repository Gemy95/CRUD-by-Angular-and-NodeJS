import { Injectable } from '@angular/core';
import {Product} from 'src/app/ViewModels/product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
  PrdList: Product[]; 
  
  constructor() { 


   // this.orderTotalPrice=0;
    this.PrdList=[
      new Product (1,'lenovo',100,10,1),
      new Product (2,'lenovo',200,20,1),
      new Product (3,'lenovo',300,30,1),
      new Product (4,'samsung',100,10,2),
      new Product (5,'iphne',200,20,2),
      new Product (6,'sony',300,30,2),
      new Product (7,'lenovo tablet',100,10,3),
      new Product (8,'samsung tablet',200,20,3),
      new Product (9,'huawie tablet',300,30,3)
         ];

  }

  
  getProductsByCatID(catID:number):Product[] 
  {
        let prdListOfselCat:Product[]=[];
        this.PrdList.filter( (prd)=>{
         // console.log('from filter ');
          if(prd.catID==catID)
          { 
           // console.log('from if statment');
               prdListOfselCat.push(prd);
          }
  
        });

        return prdListOfselCat;
  }

  
  
}
