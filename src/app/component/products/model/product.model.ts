import { Category } from "../../category/category-home/model/category.model"

export interface Product{
  productid:string,
  merchantId:string,
  merchantName:string,
  productType:string,
  productName:string,
  image:string[],
  price:number,
  description:string,
  specification:Map<string,string>
  categoryId:string,
  category:Category

}
