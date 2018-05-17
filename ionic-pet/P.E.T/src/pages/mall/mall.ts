import { Component } from '@angular/core';
import { IonicPage, NavController,ModalController, NavParams } from 'ionic-angular';
import { Shop1Page } from '../shop1/shop1';

/**
 * Generated class for the MallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mall',
  templateUrl: 'mall.html',
})
export class MallPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
  }
  pet: string='food'

 i;
  goshop1(i){
    this.modalCtrl.create('Shop1Page',{id:i.id}).present();
    console.log(i.id)
  }
 shop=JSON.parse(localStorage.getItem('res'))
   //shop=JSON.parse(this.shop1);

  ionViewDidLoad() { 
    //console.log(this.shop1)
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      console.log(xhr.readyState,xhr.status);
      if (xhr.readyState == 4) {
        //表示服务器的相应代码是200；正确返回了数据
        if(xhr.status == 200){
          var message = xhr.responseText;
          var result = JSON.parse(message);
          localStorage.setItem('res',message)   
          console.log(result)
        }
      }
    };
    xhr.open("post","http://127.0.0.1:8086?",true);//使用POST方法
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//POST需增加
    xhr.send()
  }
}
