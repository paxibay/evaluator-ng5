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

import { DashboardService } from "./service";
import * as dashboardActions from './actions';

@Injectable()
export class DashboardEffects {

  @Effect() init$ = this.actions$
    .ofType(dashboardActions.ActionTypes.INITIALIZE)
    .switchMap(() =>
      this.service.Dashboard
        .map(dashboard => ({
          type: dashboardActions.ActionTypes.LOAD_DASHBOARD,
          payload: dashboard
        }))
        .catch(() => Observable.of({ type: dashboardActions.ActionTypes.INITIALIZE }))
    );

  constructor(
    private actions$: Actions,
    private service: DashboardService,
  ) { }
}

