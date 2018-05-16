import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarPage } from '../car/car';

/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinePage');
  }
  name='点点';
  gocar(){
    this.navCtrl.push('CarPage');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      console.log(xhr.readyState,xhr.status);
      if (xhr.readyState == 4) {
        //表示服务器的相应代码是200；正确返回了数据
        if(xhr.status == 200){
          var message = xhr.responseText;
          var result = JSON.parse(message);
          console.log(result)
        }
      }
    };
    xhr.open("post","http://127.0.0.1:8086?",true);//使用POST方法
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//POST需增加
    xhr.send();
    }
  
}
