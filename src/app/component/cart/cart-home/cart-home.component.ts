import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ProductdeatailService } from '../../productdeatails/service/productdeatail.service';
import { Product } from '../../products/model/product.model';
import { ProductService } from '../../products/service/product.service';
import { CartService } from '../service/cart.service';
import { Cart } from './model/cart.model';


@Component({
  selector: 'app-cart-home',
  templateUrl: './cart-home.component.html',
  styleUrls: ['./cart-home.component.css']
})
export class CartHomeComponent implements OnInit {

  products:Product[];
  cart:Cart;
  carts:Cart[];
  userId:string;
  productId:string;
  product:Product;
  errorMsg:string;
  toast: any;
  isCartEmpty:boolean;



  constructor(private cartService:CartService,private productService:ProductService,
    private productDetailsService:ProductdeatailService,private actRoute:ActivatedRoute,private router:Router,private appService:AppService) {
    this.isCartEmpty=false;
    this.products=[];
    this.product={
       "categoryId":"",
       "specification":null,
       "category":null,
       "description":"",
       "image":[],
       "merchantId":"",
       "merchantName":"",
       "price":0,
       "productName":"",
       "productType":"",
       "productid":"",

    }
    this.cart={
      "cartId":"",
      "productId":"",
      "totalItems":0,
      "productsAdded":null,
      "quantity":0,
      "totalPrice":0,
      "userId":"",

    }
   }


   ngOnInit(): void {

    this.productService.getAllProducts().subscribe(data=>{
    this.products=data;
    })
    this.userId=localStorage.getItem("userId");

    this.actRoute.params.subscribe(
    params=>{
    this.productId=params['productId'];
    this.productDetailsService.getProductsByProductId(params['productId']).subscribe(data=>{
    this.product=data;
    },error=>{
    this.errorMsg='could not load product details , please contact administrator';

    });

    }
    );

    this.userId=localStorage.getItem("userId");



    this.cartService.addItemsInCart(this.userId,this.productId,1).subscribe(data=>{
      this.cart=data;
    }),error=>{
      alert(console.error());
    }




    // this.cartService.getCarts().subscribe(data=>{
    // this.carts.push(this.cart);
    // })

  this.cartService.getCartByUserId(this.userId).subscribe(data=>{

    if(data==null){
      this.cartService.addCart({quantity:0,totalItems:0}).subscribe(data=>{

        })

    }
    if(data.totalItems===0){
      this.isCartEmpty=true;
    }
    this.cart=data;
    console.log(data.cartId);
  },
  error=>{
    this.cartService.addCart({quantity:0,totalItems:0}).subscribe(data=>{

      this.cart=data;
  })}
  )

}


addQuantity(productId:string){
  console.log("addquantity");
  console.log(productId);
  this.cartService.addQuantity(this.userId,productId,1).subscribe(data=>{
    console.log(data);
    this.cart=data;
  })
}

subtractQuantity(productId:string){
  this.cartService.subQuantity(this.userId,productId,1).subscribe(data=>{
    this.cart=data;
  })
}

deleteItem(productId:string){
  this.cartService.deleteItem(this.userId,productId).subscribe(data=>{
    this.cart=data;
    if(data.totalItems===0){
      this.isCartEmpty=true;
    }
  })
}

checkOut(){
  this.router.navigateByUrl("order/{{userId}}");
}



// this.productService.getAllProducts().subscribe(data=>{
//   this.products=data;
//   })

//   this.userId=localStorage.getItem("userId");


//   this.cartService.getCartByUserId(this.userId).subscribe(data=>{
//       this.cart=data;
//       this.appService.cartItems.next(data.totalItems);
//     if(this.cart.totalItems==0){

//       this.isCartEmpty=true;
//       console.log(this.isCartEmpty);
//     }
//     console.log(data.cartId)
//   },error=>{
//     this.cartService.addCart(this.cart).subscribe(data1=>{
//       this.appService.cartItems.next(data1.totalItems);
//       this.cart=data1;
//       })
//   } );

//   this.cartService.getCarts().subscribe(data=>{
//   //this.carts.push(this.cart);
//   })

//   }

//   addQuantity(productId:string){
//     if(this.cart.totalItems==0){
//       this.isCartEmpty=true;
//     }
//     this.cartService.addQuantity(this.userId,productId,1).subscribe(data=>{
//       this.cart=data;

//     })
//   }

//   subQuantity(productId:string){
//     if(this.cart.totalItems==0){
//       this.isCartEmpty=true;
//     }
//     this.cartService.subQuantity(this.userId,productId,1).subscribe(data=>{
//       this.cart=data;
//     })
//   }

//   deleteItem(productId:string){
//     if(confirm("Are you sure you want to delete this item from cart")){
//       this.cartService.deleteItem(this.userId,productId).subscribe(data=>{
//         this.cart=data;
//         this.appService.cartItems.next(data.totalItems);
//         if(this.cart.totalItems==0){
//           this.isCartEmpty=true;
//         }
//       })
//     }

//   }

  }



