import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  quantity:number[]=[0,1,5,3,1,0]
  price:string[]=["1100$","1000$","1500$","1100$","1000$","1500$"]
  myQuantity=""
imgsSrs: string[]=["assets/product2.png","assets/product3.png","assets/product4.png","assets/product4.png","assets/product2.png","assets/product3.png"]
}
