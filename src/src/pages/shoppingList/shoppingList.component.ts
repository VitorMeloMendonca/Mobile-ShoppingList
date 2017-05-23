import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { ShoppingListService } from './shoppingList.service';
import { ProductService } from '../product/product.service';

import { ItemProduct } from '../itemProduct/itemProduct.model';
import { Product } from '../product/product.model';
import { Item } from '../item/item';
import { ShoppingList } from './shoppingList.model';


@Component({
  selector: 'page-home',
  templateUrl: 'shoppingList.html',
  providers: [ShoppingListService, ProductService]
})
export class ShoppingListPage implements OnInit {

  shoppingList: ShoppingList = this.cleanShoppingList();

  cleanShoppingList() {
    return new ShoppingList(0, new Date, new Array<Item>());
  }

  item: Item = this.cleanItem();

  cleanItem() {
    return new Item(0, null, 0, 0,
      new ItemProduct(0, null, new Date));
  };

  listProdutcts: Product[];

  constructor(public navCtrl: NavController
    , public toastCtrl: ToastController
    , private productService: ProductService
    , private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.get();
  }

  get() {
    this.productService
      .get()
      .subscribe(p => this.listProdutcts = p);
  }

  add(): void {
    this.shoppingList.Items.push(this.item);
    this.item = this.cleanItem();
  }

  save(): void {
    this.shoppingListService
      .post(this.shoppingList)
      .subscribe(() => { });

    this.presentToast('Shopping List saved with success!');
    this.shoppingList = this.cleanShoppingList();
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
