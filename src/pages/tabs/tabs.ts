import { ConfigurationsPage } from './../configurations/configurations';
import { Component } from '@angular/core';

import { FeedPage } from '../feed/feed';
import { HomePage } from '../home/home';
import { MyCardPage } from '../my-card/my-card';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FeedPage;
  tab3Root = MyCardPage;
  tab4Root = ConfigurationsPage;

  constructor() {

  }
}
