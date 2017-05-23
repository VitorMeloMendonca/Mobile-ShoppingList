import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { ProductService } from './product.service';

import { Product } from './product.model';

@Component({
  selector: 'page-contact',
  templateUrl: 'product.html',
  providers: [ProductService]
})

export class ProductPage implements OnInit {

  product = {
    'Id': 0,
    'Name': null,
    'Date': new Date
  };

  produtcs: Product[];

  constructor(public navCtrl: NavController
    , public toastCtrl: ToastController
    , public productService: ProductService) {
  }

  ngOnInit() {
    this.get();
  }

  get() {
    this.productService
      .get()
      .subscribe(p => this.produtcs = p);
  }

  save(product): void {
    this.productService
      .post(product)
      .subscribe(() => { });

    this.presentToast('Product saved with success!');
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      closeButtonText: 'Ok',
    });
    toast.present();
  }
}

