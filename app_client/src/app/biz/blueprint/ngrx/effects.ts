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

import { BlueprintService } from "./service";
import * as blueprintActions from './actions';

@Injectable()
export class BlueprintEffects {

  @Effect() loadBlueprint$ = this.actions$
    .ofType(blueprintActions.ActionTypes.INITIALIZE)
    .switchMap(() =>
      this.service.Blueprint
        .map(blueprint => ({
          type: blueprintActions.ActionTypes.LOAD_PRODUCTS,
          payload: blueprint[0]
        }))
        .catch(() => Observable.of({ type: blueprintActions.ActionTypes.INITIALIZE }))
  );

  constructor(
    private actions$: Actions,
    private service: BlueprintService,
  ) { }
}


//class TalksEffects {
//  // @Effect() navigateToTalks = ...
//  // @Effect() navigateToTalk = ...
//  // @Effect() rateTalk = ...
//  // @Effect() watchTalk = ...
//  constructor(private actions: Actions, private store: Store<State>, private backend: Backend, private watch: WatchService) {
//  }
//}



//constructor(
//  private actions$: Actions,
//  private service: BlueprintService,
//) {
//  const checking$ = Rx.Observable.timer(0, 1000);
//  const savings$ = Rx.Observable.timer(0, 5 * 10000);
//  const balance$ = Rx.Observable.combineLatest(checking$, savings$);

//}
