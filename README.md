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
  - Tabs [View](https://github.com/Renan-S/Ionic-v3-mockApp/tree/master/src/pages/tabs)
  - navControl.push() [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/feed/feed.ts#L86)
  - navParams [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/detail-movie/detail-movie.ts#L31)
  - localStorage [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/providers/config/config.ts#L36)
  - ion-list [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/configurations/configurations.html#L8)
  - ion-toolbar [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/configurations/configurations.html#L3)
  - ion-item [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/configurations/configurations.html#L9)
  - ion-button [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/feed/feed.html#L57)
  - ion-refresher [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/feed/feed.html#L14)
  - ion-infinite-scroll [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/feed/feed.html#L60)
  - ion-note [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/feed/feed.html#L52)

4. Non specifics:
  - *ngIf [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/detail-movie/detail-movie.html#L14)
  - *ngFor [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/feed/feed.html#L21)
  - API Consume [View](https://github.com/Renan-S/Ionic-v3-mockApp/blob/master/src/pages/detail-movie/detail-movie.ts#L37)
