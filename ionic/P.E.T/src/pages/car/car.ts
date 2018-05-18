import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import $ from 'jquery'
/**
 * Generated class for the CarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car',
  templateUrl: 'car.html',
})
export class CarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { 
    
  }
  shop=JSON.parse(localStorage.getItem('res'));
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
  
  number=1;
  next(){
    this.number--; 
    if(this.number<1){
      this.number=1;
    }
  }
  add(){
    this.number++;
    this.num=this.price*this.number
  }
  gobuy(){
    this.navCtrl.push('BuyPage')
  }
  check=false;
  price;
  s
  num=0;
  all(l){
    
    $('.che').attr('checked','false');
    if(this.check==false){
      this.check=true;
      for(var m=0;m<this.shop.length;m++){
        this.num+=this.price*this.number;
      }
    }else if(this.check==true){
      this.check=false;
    }
   }
  
}
