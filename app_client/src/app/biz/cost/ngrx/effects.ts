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

import { CostService } from "./service";
import * as costActions from './actions';

@Injectable()
export class CostEffects {

  @Effect() loadCost$ = this.actions$
    .ofType(costActions.ActionTypes.INITIALIZE)
    .switchMap(() =>
      this.service.Cost
        .map(cost => ({
          type: costActions.ActionTypes.LOAD_COST,
          payload: cost
        }))
        .catch(() => Observable.of({ type: costActions.ActionTypes.INITIALIZE }))
    );

  constructor(
    private actions$: Actions,
    private service: CostService,
  ) { }

}

