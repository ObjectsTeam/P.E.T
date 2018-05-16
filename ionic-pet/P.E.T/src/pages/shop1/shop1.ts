import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
import { CarPage } from '../car/car';
import { BuyPage } from '../buy/buy';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the Shop1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop1',
  templateUrl: 'shop1.html',
})
export class Shop1Page {
  goodlist=['1','2'];
  id
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,public modalCtel:ModalController,public viewCtrl:ViewController) {
    this.id=this.navParams.get('id');
    console.log(this.id)
  }
 number=1
  next(){
    this.number--;
    if(this.number<1){
      this.number=1;
    }
  }
  onIn
  add(){
    this.number++;
  }
  gobuy(){
    this.navCtrl.push('BuyPage')
  }
  
  gocar() {
    let toast = this.toastCtrl.create({
      message: '成功加入我的订单',
      duration: 2000
    });
    toast.present();
  
  }
  shop=JSON.parse(localStorage.getItem('res'));
  ionViewDidLoad() { 
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
    xhr.send();


  }
  

}
