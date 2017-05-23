import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { ShoppingListService } from '../shoppingList/shoppingList.service';
import { PurchaseService } from '../purchase/purchase.service';
import { SupermarketService } from '../supermarket/supermarket.service';

import { Purchase } from '../purchase/purchase.model';
import { ShoppingList } from '../shoppingList/shoppingList.model';
import { Supermarket } from '../supermarket/supermarket.model';
import { Item } from '../item/item';

@Component({
  selector: 'page-about',
  templateUrl: 'purchase.html',
  providers: [ShoppingListService, PurchaseService, SupermarketService]
})
export class PurchasePage implements OnInit {

  constructor(public navCtrl: NavController
    , private toastCtrl: ToastController
    , private shoppingListService: ShoppingListService
    , private purchaseService: PurchaseService
    , private supermarketService: SupermarketService) {
  }

  purchase: Purchase = this.cleanPurchase();

  cleanPurchase() {
    return new Purchase(0
      , new Date
      , new Array<Item>()
      , new Supermarket(0
        , null
        , new Date));
  }

  listShoppingList: ShoppingList;
  listSupermarket: Supermarket[] = [];

  ngOnInit() {
    this.getShoppingList();
    this.getSupermarket();
  } Su

  getShoppingList() {
    this.shoppingListService
      .get()
      .subscribe(p => this.listShoppingList = p);
  }

  getSupermarket() {
    this.supermarketService
      .get()
      .subscribe(p => this.listSupermarket = p);
  }

  save(): void {
    this.purchase.Items = this.listShoppingList[0].Items;
    this.purchaseService
      .post(this.purchase)
      .subscribe(() => { });

    this.presentToast('Purchase saved with success!');
    this.purchase = this.cleanPurchase();
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      closeButtonText: 'Ok',
    });
    toast.present();
  }

}
