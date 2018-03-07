import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { FundsService } from "./service";
import * as fundsActions from './actions';

@Injectable()
export class FundsEffects {

  @Effect() init$ = this.actions$
    .ofType(fundsActions.ActionTypes.INITIALIZE)
    .switchMap(() =>
      this.service.Funds
        .map(funds => ({
          type: fundsActions.ActionTypes.LOAD_FUNDS,
          payload: funds
        }))
        .catch(() => Observable.of({ type: fundsActions.ActionTypes.INITIALIZE }))
    );

  constructor(
    private actions$: Actions,
    private service: FundsService,
  ) { }

}

