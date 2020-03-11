## What did i learn?

1. Basics of creating an Ionic development environment and CLI;
- ionic start movieApp tabs --type=ionic-angular (Project with ionic-v3)
- ionic serve (Project view in localhost)
- ionic cordova run android (Emulates project on Android Studio AVD)
- ionic g page NeatPage (Neutral default page called NeatPage)
- ionic g tabs (Create the TabsPage and its childs)
- ionic g pipe (Pipes are archives made for filtering something)
- ionic g provider (API caller)
- ionic g components (Components are modals, pop, slider, etc. They are a less generalist Page. All new element)
- ionic g directive (Directives are arquives to change the components behavior)

2. Ionic lyfecyle;
- 1. ngOnInit 
- 2. ionViewWillEnter
- 3. ionViewDidEnter (DidLoad if only one time)
- 4. ionViewWillLeave
- 5. ionViewDidLeave
- 6. ngOnDestroy

3. Using framework specifics like: 
  - Providers [View](https://github.com/Renan-S/Ionic-v3-mockApp/tree/master/src/providers)
  - Enum [View](https://github.com/Renan-S/Ionic-v3-mockApp/tree/master/src/enum)
  - navControl.push() [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/feed/feed.ts)
  - navParams [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/detail-movie/detail-movie.ts)
  - localStorage [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/providers/config/config.ts)
  - ion-list [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/configurations/configurations.html)
  - ion-toolbar [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/configurations/configurations.html)
  - ion-tab(s) [View](https://github.com/Renan-S/Ionic-v3-mockApp/tree/master/src/pages/tabs)
  - ion-item [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/configurations/configurations.html)
  - ion-button [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/feed/feed.html)
  - ion-refresher [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/feed/feed.ts)
  - ion-infinite-scroll [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/feed/feed.ts)
  - ion-note [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/feed/feed.ts)

4. Non specifics:
  - *ngIf [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/detail-movie/detail-movie.html)
  - *ngFor [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/feed/feed.html)
  - API Consume [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/detail-movie/detail-movie.ts)
