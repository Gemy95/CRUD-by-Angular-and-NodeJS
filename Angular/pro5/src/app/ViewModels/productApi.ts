import { Category } from './category';

export class ProductApi {
   
    constructor(public _id ?: number , public name ?: string , public price ?: number,
         public brand ?: string , public model ?: number,public color ?: string,
         public quantity ?: number , public weight ?: number,public details ?: string,
         public imgUrl ?: string 
         
         )
    {

    }

}
