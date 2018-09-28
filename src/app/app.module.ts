import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { ContactService } from './contact.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule
  ],
  providers: [FlashMessagesService,
              ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
