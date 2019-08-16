import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ProductApi } from 'src/app/ViewModels/productApi';
import { Router} from '@angular/router'



@Component({
  selector: 'app-product-api',
  templateUrl: './product-api.component.html',
  styleUrls: ['./product-api.component.scss']
})
export class ProductApiComponent implements OnInit {
  myProductListApi : ProductApi[]=[];
  totalPrice : number = 0 ;  
  array_of_product_id:number[];
  array_of_product_value:number[];
  flag :Boolean;
  constructor(private productServiceApi:ProductApiService , private router:Router) { 
    this. array_of_product_id=[0];
    this. array_of_product_value=[0];
    this.flag=false;
  }

  ngOnInit() {

    this.productServiceApi.getProducts()
    .subscribe(data=>{

       for(var i=0;i<data.length;i++)
      {
       this.myProductListApi.push(new ProductApi(data[i]._id,data[i].name,data[i].price,data[i].brand,data[i].model,
        data[i].color,data[i].quantity,data[i].weight));
      }

      /// id of new product 
      this.productServiceApi.newIdOfProductApi=data[i-1]._id + 1;
      //console.log(" last id= "+data[i-1]._id);
      //console.log(data);
    })
    }

    showProductApi(productName:string)
    {
      this.router.navigate(['showProductApi/',productName]);
    }
 

    deleteProductApi(productName:string)
    {
      this.productServiceApi.deleteProduct(productName).subscribe(
        (res)=>{
          console.log("success remove")
          window.location.reload();        
           },
        (err)=>{
          console.log(err)
       });
         
       
    }


    buyProductApi(prd:ProductApi,requiredQuantity:number)
    {
         if(prd.quantity>=requiredQuantity)
       {
       this.productServiceApi.buyProduct(prd.name,requiredQuantity).subscribe(
         (res)=>{
           console.log("success update")
              //  window.location.reload();
            },
         (err)=>{
           console.log(err)
        });
      
        this.totalPrice=0;
        
         for(var i=0 ;i<this.array_of_product_id.length;i++)
         {
           if(this.array_of_product_id[i]==prd._id)
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
            this.array_of_product_value[i]=requiredQuantity*prd.price;
         }
         else
         {
            this.array_of_product_id.push(prd._id);
            this.array_of_product_value[i]=requiredQuantity*prd.price;
         }
            
            for(let j=0;j<this.array_of_product_value.length;j++)
            {
             if(this.array_of_product_value[j]>0)
             this.totalPrice+=this.array_of_product_value[j];

             //console.log("i="+j+" and value="+this.array_of_product_value[j]);
             //console.log("totalP="+this.totalPrice);

            }
            
          
           //console.log();
          }
    }
    

    editProductApi(productName:string,productId:number)
    {
      this.router.navigate(['editProductApi/',productName,productId]);
    }

    addProductApi()
    {
        this.router.navigate(['addProductApi/']);
    }

   

}
