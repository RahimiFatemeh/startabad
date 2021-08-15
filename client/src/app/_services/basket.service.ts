import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Basket } from '../_models/Basket';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl = environment.apiUrl;
  basket : Basket[] = [] 
  
  constructor(private http: HttpClient  ) { }
  // createPaymentIntent() {
  //   return this.http.post(this.baseUrl + 'payments/' + this.getCurrentBasketValue().id, {})
  //     .pipe(
  //       map((basket: IBasket) => {
  //         this.basketSource.next(basket);
  //       })
  //     );
  // }

  // setShippingPrice(deliveryMethod: IDeliveryMethod) {
  //   this.shipping = deliveryMethod.price;
  //   const basket = this.getCurrentBasketValue();
  //   basket.deliveryMethodId = deliveryMethod.id;
  //   basket.shippingPrice = deliveryMethod.price;
  //   this.calculateTotals();
  //   this.setBasket(basket);
  // }

  // getBasket(id: string) {
  //   return this.http.get(this.baseUrl + 'basket?id=' + id)
  //     .pipe(
  //       map((basket: IBasket) => {
  //         this.basketSource.next(basket);
  //         this.shipping = basket.shippingPrice;
  //         this.calculateTotals();
  //       })
  //     );
  // }

  // setBasket(basket: IBasket) {
  //   return this.http.post(this.baseUrl + 'basket', basket).subscribe((response: IBasket) => {
  //     this.basketSource.next(response);
  //     this.calculateTotals();
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  getCurrentBasketValue() {
    return this.basket;
  }

  addItemToBasket(item:any) {
    if (localStorage.getItem('cart') == null)
    {
      this.basket.push(item)
      localStorage.setItem('cart' , JSON.stringify(this.basket))
    }
    else
    {
      this.basket =JSON.parse(localStorage.getItem('cart') || '{}')
      var flag = true 
      for(var i = 0 ; i<this.basket.length ; i++)
      {
        if (this.basket[i].id === item.id )
        {
          flag = false 
        }
      }
      if(flag){
        this.basket.push(item)
        localStorage.setItem('cart' , JSON.stringify(this.basket))
      }
    }  
  }
  removeItemFromBasket(id: any) {
    this.basket=JSON.parse(localStorage.getItem('cart') || '{}')
      for(let i=0 ; i<this.basket.length ; i++)
      {
        if (this.basket[i].id === id)
        { 
          
          this.basket.splice(i,1)

          localStorage.setItem('cart' , JSON.stringify(this.basket))
        }
      }
  }

  // deleteBasket(basket: IBasket) {
  //   return this.http.delete(this.baseUrl + 'basket?id=' + basket.id).subscribe(() => {
  //     this.basketSource.next(null);
  //     this.basketTotalSource.next(null);
  //     localStorage.removeItem('basket_id');
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  // private createBasket(): IBasket {
  //   const basket = new Basket();
  //   localStorage.setItem('basket_id', basket.id);
  //   return basket;
  // }

  // private mapProductItemToBasketItem(item: IProduct, quantity: number): IBasketItem {
  //   return {
  //     id: item.id,
  //     productName: item.name,
  //     price: item.price,
  //     pictureUrl: item.pictureUrl,
  //     quantity,
  //     brand: item.productBrand,
  //     type: item.productType
  //   };
  // }
}
