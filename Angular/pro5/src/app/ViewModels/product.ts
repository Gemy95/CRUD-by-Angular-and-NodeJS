import { Category } from './category';

export class Product {
   
    constructor(public ID ?: number , public Name ?: string ,
         public Price ?: number , public Quantity ?: number,public catID ? : number,
         public imgPath ? : string
         )
    {
/// ?  means optional


    }

}
