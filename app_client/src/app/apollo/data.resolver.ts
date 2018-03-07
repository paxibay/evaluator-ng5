import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataSource } from './data.source';
import { Product } from './../state';
// import { MessageService } from '../modules/messages/message.service';
// import { Message } from '../modules/messages/message.model';

@Injectable()
export class DataResolver {

  constructor(
    private dataSource: DataSource,
    /*private messages: MessageService*/) { }

  // resolve(route: ActivatedRouteSnapshot,
  //  state: RouterStateSnapshot): Observable<Product[]> {
  //  if (this.dataSource.getProducts().length == 0) {
  //    this.messages.reportMessage(new Message('Loading data...'));
  //    return null; //this.dataSource.blueprintData();
  //  }
  // }
}
