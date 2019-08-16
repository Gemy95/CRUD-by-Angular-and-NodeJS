import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { Product } from 'src/app/ViewModels/product';



@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
    
  selectedProduct :Product; 

  constructor(private activatedRoute:ActivatedRoute,private ProductsService:ProductsService) {

    this.selectedProduct=new Product();

   }

   ngOnInit() {
     //let sentId=this.activatedRoute.snapshot.params[‘pid’];
     let sentId=this.activatedRoute.snapshot.paramMap.get('id');
     
     for(let i=0;i<this.ProductsService.PrdList.length;i++)
     {
            if(parseInt(sentId)==this.ProductsService.PrdList[i].ID)
            {
                 this.selectedProduct=this.ProductsService.PrdList[i];
            }
     }


    }

}
