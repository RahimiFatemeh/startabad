import { Component, OnInit } from '@angular/core';
import { Basket } from '../_models/Basket';
import { BasketService } from '../_services/basket.service';
import { BusyService } from '../_services/busy.service';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.css']
})
export class BasketSummaryComponent implements OnInit {
  items!:Basket[]
  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.loadItems()
  }

  loadItems()
  {
    this.items = JSON.parse( localStorage.getItem('cart')  || '{}')
  }

  reomveFromBasket(id : number)
  {
    this.basketService.removeItemFromBasket(id)
    this.loadItems()
  }

}
