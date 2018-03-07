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

import { RevenueService } from "./service";
import * as revenueActions from './actions';

@Injectable()
export class RevenueEffects {

  @Effect() init$ = this.actions$
    .ofType(revenueActions.ActionTypes.INITIALIZE)
    .switchMap(() =>
      this.service.Revenue
        .map(revenue => ({
          type: revenueActions.ActionTypes.LOAD_REVENUE,
          payload: revenue
        }))
        .catch(() => Observable.of({ type: revenueActions.ActionTypes.INITIALIZE }))
    );

  constructor(
    private actions$: Actions,
    private service: RevenueService,
  ) { }
}

