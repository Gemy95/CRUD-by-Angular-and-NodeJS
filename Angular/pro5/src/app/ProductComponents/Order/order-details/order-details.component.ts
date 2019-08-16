import { Component, OnInit, Input, OnChanges, Output,EventEmitter } from '@angular/core';
import { Product } from 'src/app/ViewModels/product';
//import { EventEmitter } from 'protractor';
import { Router} from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit ,OnChanges { 
    
 @Input()  selectedCatIDFrmMaster:number;
 @Output() totalPriceChanged:EventEmitter<number>;

//   PrdList: Product[];     
   prdListOfselCat:Product[];
   orderTotalPrice:number;
   array_of_product_id:number[];
   array_of_product_value:number[];
   flag :Boolean;

   

  constructor(private _router:Router,private prdService:ProductsService)
  {
     this. array_of_product_id=[0];
     this. array_of_product_value=[0];
     this.flag=false;

     this.totalPriceChanged=new EventEmitter<number>();
     this.orderTotalPrice=0;
     /*
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
    */
  }

/*
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
  
*/
/*
getProductsByCatID(catID : number):Product[]
{
  return this.prdService.getProductsByCatID(catID);
}
*/


gotoDetails(productID){
  this._router.navigate(['product/',productID]);
  }


  onBuyClick(prdPrice:number,itemsCount:number,productID:number) 
  {  
   this.orderTotalPrice=0;
   console.log(productID);
   console.log(itemsCount);
   console.log(prdPrice);
   
    for(var i=0 ;i<this.array_of_product_id.length;i++)
    {
      if(this.array_of_product_id[i]==productID)
      { 
        this.flag=true;
        break;
      }
      else
      {
        this.flag=false;  
      }
    }
   
    if(this.flag)
    {
       this.array_of_product_value[i]=itemsCount*prdPrice;
    }
    else
    {
       this.array_of_product_id.push(productID);
       this.array_of_product_value[i]=itemsCount*prdPrice;
    }
       
       for(let j=0;j<this.array_of_product_value.length;j++)
       {
        //console.log(" j= "+j+" && value="+this.array_of_product_value[j]);
        if(this.array_of_product_value[j]>0)
        this.orderTotalPrice+=this.array_of_product_value[j];
       }
       console.log("total="+this.orderTotalPrice);
       this.totalPriceChanged.emit(this.orderTotalPrice);
  }

  ngOnInit() {
    
  }

  ngOnChanges()
  {
    //console.log(this.selectedCatIDFrmMaster);
    //this.prdListOfselCat=this.getProductsByCatID(this.selectedCatIDFrmMaster);
      this.prdListOfselCat=this.prdService.getProductsByCatID(this.selectedCatIDFrmMaster);
  }

}
