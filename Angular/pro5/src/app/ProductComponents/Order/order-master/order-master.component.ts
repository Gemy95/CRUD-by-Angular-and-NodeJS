import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/ViewModels/category';
//import { Product } from '../product';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit {
   
  CatList:Category[]=[];
  selectedCatId:number;
  orderTotalPriceFrmDetails:number;

  constructor() {

      this.CatList=[
          new Category(1,'Laptops'),
          new Category(2,'Mobiles'),
          new Category(3,'Tablets')
       ];
       this.orderTotalPriceFrmDetails=0;
  // this.selectedCatId=2;

   }

   onTotalPriceChanged(newTotalPrice:number ):void
   {
         this.orderTotalPriceFrmDetails=newTotalPrice;
   }
           
  ngOnInit() {
  }

}
