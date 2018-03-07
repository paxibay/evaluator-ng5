import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

import { DataModule } from './../apollo/data.module';
import { BizModule} from './../biz/biz.module';
import {EntryComponent } from './components/entry.component';


const MODULES = [
  BrowserModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  DataModule,
  BizModule
];

const COMPONENTS = [
  EntryComponent,
];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
  exports: [EntryComponent],
  providers: []
})
export class EntryModule {}
