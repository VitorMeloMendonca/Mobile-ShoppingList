import { Component } from '@angular/core';

import { PurchasePage } from '../purchase/purchase.component';
import { ProductPage } from '../product/product.component';
import { ShoppingListPage } from '../shoppingList/shoppingList.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ShoppingListPage;
  tab2Root = PurchasePage;
  tab3Root = ProductPage;

  constructor() {

  }
}
