import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {

  constructor(
      private http: HttpClient
  ) { }

  items: any[] = [];
  addToCart(product){
    this.items.push(product);
    return this.items;
  }

  getItems(){
    return this.items;
  }


  clearCart(){
    this.items = [];
    return this.items;
  }

  removeItem(index){
    return this.items.splice(index,1);
  }

  getShippingPrices(): Observable<any> {
    return this.http.get('/assets/shipping.json');
  }
}