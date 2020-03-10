import { DetailMoviePageModule } from './../pages/detail-movie/detail-movie.module';
import { PerfilPageModule } from './../pages/perfil/perfil.module';
import { ConfiguracoesPageModule } from './../pages/configuracoes/configuracoes.module';
import { SobrePageModule } from './../pages/sobre/sobre.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeedPageModule } from '../pages/feed/feed.module';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http'
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPageModule } from '../pages/intro/intro.module';
import { MovieProvider } from '../providers/movie/movie';
import { MyCardPageModule } from '../pages/my-card/my-card.module';
import { DetailMovieProvider } from '../providers/detail-movie/detail-movie';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    IntroPageModule,
    MyCardPageModule,
    HttpModule,
    HttpClientModule,
    ConfiguracoesPageModule,
    SobrePageModule,
    PerfilPageModule,
    DetailMoviePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    DetailMovieProvider
  ]
})
export class AppModule {}
