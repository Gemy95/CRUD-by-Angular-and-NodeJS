import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../ViewModels/product';
import { Observable } from 'rxjs';
import { ProductApi } from '../ViewModels/productApi';


@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  editedProductApi :ProductApi;
  newIdOfProductApi:number;
  constructor(private httpClient:HttpClient ) {

   }

getProducts():Observable<Array<ProductApi>>
{
return this.httpClient.get<Array<ProductApi>>('http://localhost:5000/getProducts');
}


getProduct(productNameApi:string):Observable<ProductApi>
{
return this.httpClient.get<ProductApi>('http://localhost:5000/showAngular/'+productNameApi);
}


deleteProduct(productNameApi:string):Observable<ProductApi>
{
return this.httpClient.get<any>('http://localhost:5000/deleteAngular/'+productNameApi);
}


buyProduct(productNameApi:string,ProductQuantityApi:number):Observable<ProductApi>
{
return this.httpClient.get<any>('http://localhost:5000/buyAngular/'+productNameApi+"/"+ProductQuantityApi);
}


editProduct(productNameApi:string,editedPrd: ProductApi): Observable <any>
 {

  console.log("from service ="+editedPrd.name)

let editedObj={ name : editedPrd.name ,
  color : editedPrd.color  , model : editedPrd.model
  , price : editedPrd.price , quantity : editedPrd.quantity
 , brand : editedPrd.brand ,weight : editedPrd.weight } 

  const httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': ' */*'
    // ,'Authorization': 'my-auth-token'
      })};
      console.log(editedPrd);
  return this.httpClient
  .post <any>('http://localhost:5000/updateAngular/'+productNameApi, editedPrd, httpOptions);
 }




 insertProduct(newPrd: ProductApi): Observable <any> {
  const httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': ' */*'
    // ,'Authorization': 'my-auth-token'
      })};
//console.log("newprd from service"+newPrd.name);
  return this.httpClient
  .post <any>('http://localhost:5000/insertAngular', newPrd , httpOptions);
 }





}



