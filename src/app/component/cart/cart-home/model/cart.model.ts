import { ItemsAddedInCart } from "./ItemsAddedInCart.model";

export interface Cart{
  "cartId"?:string,
  "totalPrice"?:number,
  "userId"?:string,
  "totalItems"?:number,
  "quantity"?:number,
  "productId"?:string,
  "productsAdded"?:ItemsAddedInCart[]
}
