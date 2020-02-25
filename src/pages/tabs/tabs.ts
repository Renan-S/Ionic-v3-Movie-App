import { Component } from '@angular/core';

import { FeedPage } from '../feed/feed';
import { IntroPage } from '../intro/intro';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = IntroPage;
  tab2Root = FeedPage;

  constructor() {

  }
}
