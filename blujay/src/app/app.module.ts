import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { environment } from 'src/environments/environment';
import { TrackListHeroComponent } from './components/track-list-hero/track-list-hero.component';
import { HomeGraphicComponent } from './components/home-graphic/home-graphic.component';
import { ToastComponent } from './components/toast/toast.component';
import { BadgeComponent } from './components/badge/badge.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TrackListComponent,
    TrackListHeroComponent,
    HomeGraphicComponent,
    ToastComponent,
    BadgeComponent,
    AudioPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: environment.api
        })
      };
    },
    deps: [HttpLink]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
