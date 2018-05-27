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
  total=0;
  s=0;
  g=0
  settotal(m){
    this.s=this.shop[m].price*this.shop[m].num
    console.log(this.s)
    this.total+=this.s
  }
  shop=JSON.parse(localStorage.getItem('res'));
  ionViewDidLoad() { 
    var obj={
      'username':'123'
    }
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        //表示服务器的相应代码是200；正确返回了数据
        if(xhr.status == 200){
          var message = xhr.responseText;
          var result = JSON.parse(message);
          localStorage.setItem('res',message)   
        }
      }
    };
    xhr.open("post","http://127.0.0.1:8089?"+obj.username,true);//使用POST方法
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//POST需增加
    xhr.send()
  }
  price:number;
  num:number;

  number=1;
  next(m,e){
    this.shop[m].num--; 
    if($(e.currentTarget).parent().parent().prev().prop("checked")){
      this.total-=this.shop[m].price
    }
    if(this.shop[m].num<1){
      this.shop[m].num=1;
      this.settotal(m)
    }
  }
  add(m,e){
    this.shop[m].num++;
    if($(e.currentTarget).parent().parent().prev().prop("checked")){
      this.total+=this.shop[m].price
    }
  }
  sum(m,e){
    if($(e.currentTarget).prop("checked")){
       this.settotal(m);
    }
   else{
    this.total=this.total-this.shop[m].price*this.shop[m].num
   }
  } 
  all(){
    if($('.che').prop("checked")){
      $('.che').prop("checked",false)
      this.s=0;
      this.total=0;
    }
    else{
      $('.che').prop("checked",true)
      for(var m=0;m<this.shop.length;m++){
           this.settotal(m)
        } 
    }
   }
   gobuy(){
    this.navCtrl.push('BuyPage')
  }
}

