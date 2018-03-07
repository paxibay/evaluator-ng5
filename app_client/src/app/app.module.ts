import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EntryModule} from './entry/entry.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EntryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
