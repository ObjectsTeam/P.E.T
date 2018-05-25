import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SearchpetPage } from '../searchpet/searchpet';
import { JingyanjiaoliuPage } from '../jingyanjiaoliu/jingyanjiaoliu';
import { MinePage } from '../mine/mine';
import { MallPage } from '../mall/mall';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContactPage;
  tab3Root = MallPage;
  tab4Root =MinePage ;
  constructor() {

  }
}
