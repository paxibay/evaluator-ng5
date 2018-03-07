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

import { LiquidityService } from "./service";
import * as liquidityActions from './actions';

@Injectable()
export class LiquidityEffects {

  @Effect() loadLiquidity$ = this.actions$
    .ofType(liquidityActions.ActionTypes.INITIALIZE)
    .switchMap(() =>
      this.service.Liquidity
        .map(liquidity => ({
          type: liquidityActions.ActionTypes.LOAD_LIQUIDITY,
          payload: liquidity
        }))
        .catch(() => Observable.of({ type: liquidityActions.ActionTypes.INITIALIZE }))
  );

  constructor(
    private actions$: Actions,
    private service: LiquidityService,
  ) { }

}

