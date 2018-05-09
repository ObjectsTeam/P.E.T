import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SearchpetPage } from '../searchpet/searchpet';
import { JingyanjiaoliuPage } from '../jingyanjiaoliu/jingyanjiaoliu';
import { MinePage } from '../mine/mine';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HomePage;
  tab3Root = ContactPage;
  tab4Root =MinePage ;
  constructor() {

  }
}
