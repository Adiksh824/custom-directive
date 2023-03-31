import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoundBlockDirective } from './round-block.directive';
import { RoundBlackDirective } from './round-black.directive';
import { RoundBlickDirective } from './round-blick.directive';

@NgModule({
  declarations: [
    AppComponent,
    RoundBlockDirective,
    RoundBlackDirective,
    RoundBlickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
