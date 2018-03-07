import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { Repository } from './data.repository';
import { DataResolver } from './data.resolver';
import { DataSource, REST_URL } from './data.source';

@NgModule({
  imports: [HttpModule, JsonpModule],
  providers: [
    Repository,
    DataSource,
    { provide: REST_URL, useValue: 'http://localhost:3500' }
  ]
})
export class DataModule { }
