import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  cartForm;
  
  constructor(
    private cartService:CartService,
    private formBuilder: FormBuilder
  ) {
    this.items=this.cartService.getItems();
   }



  
  ngOnInit() {
    this.cartForm = this.formBuilder.group({
      'name': '',
      "email": ''
    })
  }

  clear(){
    this.items=this.cartService.clearCart();
  }

  removeProduct(index){
    let deletedItem = this.cartService.removeItem(index);
    console.log(deletedItem);
  }

  handleUserData(){
    console.log(this.cartForm.value)
  }
}