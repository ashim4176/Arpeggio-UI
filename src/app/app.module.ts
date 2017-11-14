import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { EventComponent } from './event/event.component';
import { AboutComponent } from './about/about.component';
import { TwitterComponent } from './twitter/twitter.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    HeaderComponent,
    HomeComponent,
    ExploreComponent,
    EventComponent,
    AboutComponent,
    TwitterComponent,
    SponsorComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
