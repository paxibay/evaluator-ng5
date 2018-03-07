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

import { DepreciationService } from "./service";
import * as depreciationActions from './actions';

@Injectable()
export class DepreciationEffects {

  @Effect() init$ = this.actions$
    .ofType(depreciationActions.ActionTypes.INITIALIZE)
    .switchMap(() =>
      this.service.Depreciation
        .map(depreciation => ({
          type: depreciationActions.ActionTypes.LOAD_DEPRECIATION,
          payload: depreciation
        }))
        .catch(() => Observable.of({ type: depreciationActions.ActionTypes.INITIALIZE }))
    );

  constructor(
    private actions$: Actions,
    private service: DepreciationService,
  ) { }

}

