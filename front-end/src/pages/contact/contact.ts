import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items=['#萌宠趣事','#主人经验交流','#寻宠启示','#线下聚会']
  constructor(public navCtrl: NavController,
    ) {

  }

  others(index){
    if(index == 0){
      this.navCtrl.push('PetThingsPage');
    }else if(index == 1){
      this.navCtrl.push('JingyanjiaoliuPage');
    }else if(index == 2){
      this.navCtrl.push('SearchpetPage');
    }else if(index == 3){
      // this.navCtrl.push('')
    }
  }

}
