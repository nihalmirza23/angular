import { ItemsAddedInCart } from "../../cart/cart-home/model/ItemsAddedInCart.model";
import { Address } from "../../profile/model/user.model";

export interface Order2{
  "orderId"?: string,
  "orderDate"?: Date,
  "customerId"?: string,
  "amountPaid"?: number,
  "paymentStatus"?: boolean,
  "modeOfPayment"?: string,
  "orderStatus"?: string,
  "quantity"?: number,

    "items"?:ItemsAddedInCart[],

    "address"?:Address,
}
