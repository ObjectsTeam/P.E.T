import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScanPage } from '../scan/scan';
import { ModalController } from 'ionic-angular';
import { LocationPage } from '../location/location';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalCtrl:ModalController) {

  }
  qrscan() {
    // this.modalController.create('ScanPage').present();
    this.navCtrl.push('ScanPage');
  }
  gol(){
    this.modalCtrl.create('LocationPage').present();
  }
}
