import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { VimeModule } from '@vime/angular';
import { CartComponent } from './components/cart/cart.component';
import { CartEmptyComponent } from './components/cart-empty/cart-empty.component';
import { TrackModalComponent } from './components/track-modal/track-modal.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NgxStripeModule } from 'ngx-stripe';
import { BjButtonComponent } from './components/toolbox/bj-button/bj-button.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

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
    AudioPlayerComponent,
    CartComponent,
    CartEmptyComponent,
    TrackModalComponent,
    CheckoutComponent,
    BjButtonComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    FormsModule,
    VimeModule,
    MatSnackBarModule,
    NgxStripeModule.forRoot('pk_test_51HgjeuFVImSmLfhbqA6cMTbmM2fzhhwdOgnsLK2r7nHEcCF2aQc8xvvaiYJ0KDSFQHwg5CCHxZSS3Yj0GMoT3TSx00puBCO4Ee')
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
