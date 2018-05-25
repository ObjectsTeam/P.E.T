import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';


@IonicPage()
@Component({
  selector: 'page-lingyang',
  templateUrl: 'lingyang.html',
})
export class LingyangPage {
  url:any;  
  avatarPath='./assets/imgs/goutou.png';//默认图片  
  data: string = "";  
  imageBase64 : Array<string>=[];  
  constructor(public navCtrl: NavController, public navParams: NavParams,private imagePicker: ImagePicker,private base64: Base64) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LingyangPage');
  }
  getPicture(){  
    this.data="";  
    this.imageBase64=[];  
      
    let options = {  
      maximumImagesCount: 5,  
      outputType: 1,  
      quality: 100  
    };  
    this.imagePicker.getPictures(options).then((results) => {  
      for (var i = 0; i < results.length; i++) {  
          console.log('Image URI: ' + results[i]);  
          // 保存图片到html控件  
          var imgUrl = "<img src=" +results[i] +" width=\"60px\" height=\"60px\">  ";  
          this.data=this.data+imgUrl;  
          // 转64字节  
          this.base64.encodeFile(results[i]).then((base64File: string) => {  
          this.imageBase64.push(base64File);  
          }, (err) => {  
            console.log(err);  
          });  
      }  
    }, (err) => {   
      alert("error");  
    });  
  }  
}
