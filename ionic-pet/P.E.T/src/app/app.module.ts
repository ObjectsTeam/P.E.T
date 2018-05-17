import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import {QRScannerStatus } from '@ionic-native/qr-scanner';
import {QRScanner} from '@ionic-native/qr-scanner'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScanPage } from '../pages/scan/scan';
import { LocationPage } from '../pages/location/location';
import { SearchpetPage } from '../pages/searchpet/searchpet';
import { JingyanjiaoliuPage } from '../pages/jingyanjiaoliu/jingyanjiaoliu';
import { MinePage } from '../pages/mine/mine';
import { MallPage } from '../pages/mall/mall';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
import { LoginPage } from '../pages/login/login';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MinePage,
    MallPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnLoginPage:'true',
      tabsHideOnSubPages:'true',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MinePage,
    MallPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    ImagePicker,
    Base64,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
