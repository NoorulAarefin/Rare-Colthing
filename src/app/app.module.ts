import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubscriberModelComponent } from './components/subscriber-model/subscriber-model.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient } from '@angular/common/http';
import { QuoteService } from './Services/quote.service';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { PressComponent } from './components/press/press.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ReturnPolicyComponent } from './components/return-policy/return-policy.component';
import { FAQsComponent } from './components/faqs/faqs.component';
import { TrackAnOrderComponent } from './components/track-an-order/track-an-order.component';
import { CareersComponent } from './components/careers/careers.component';
const appRoutes: Routes = [

  {
    path: '',
    pathMatch:'full',
    redirectTo : 'home'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'product-page',
    component: ProductPageComponent
  },
  {
    path: 'contact-us',
    component: ContactComponent
  },
  {
    path: 'catalogue-page',
    component: CatalogueComponent
  },
  {
    path: 'Add-to-cart',
    component: CartComponent
  },
  {
    path: 'subscribe',
    component: SubscriberModelComponent
  },
  {
    path: 'return-policy',
    component: ReturnPolicyComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'our-story',
    component: OurStoryComponent
  },
  {
    path: 'press',
    component: PressComponent
  },
  {
    path: 'career',
    component: CareersComponent
  },
  {
    path: 'track-an-order',
    component: TrackAnOrderComponent
  },
  {
    path: 'Faq',
    component: FAQsComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    ProductPageComponent,
    FooterComponent,
    SubscriberModelComponent,
    CartComponent,
    ContactComponent,
    CatalogueComponent,
    OurStoryComponent,
    PressComponent,
    PrivacyPolicyComponent,
    ReturnPolicyComponent,
    FAQsComponent,
    TrackAnOrderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [
    QuoteService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
