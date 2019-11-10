import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeastsPanelComponent } from './comp/general/panel/beasts-panel/beasts-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    BeastsPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
