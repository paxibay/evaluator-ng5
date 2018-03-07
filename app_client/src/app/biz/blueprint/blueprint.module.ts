import { NgModule, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Store, StoreModule } from '@ngrx/store';

import { BlueprintComponent } from './blueprint.component';
import { BlueprintPlanningComponent } from './components/planning/blueprint-planning.component';



const COMPONENTS = [
  BlueprintComponent,
  BlueprintPlanningComponent
];

const MODULES = [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  StoreModule,
];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  providers: []
})
export class BlueprintModule { }
