import { InjectionToken, Injectable }  from "@angular/core";
import { Action } from '@ngrx/store';

import { BlueprintModel } from "./state";

export const ActionTypes = {
    INITIALIZE: 'INITIALIZE',
    CHANGE_SCOPE: 'CHANGE_SCOPE',
    LOAD_PRODUCTS: 'LOAD_PRODUCTS',
    VERIFY_OPTION: 'VERIFY_OPTION'
};

export class InitializeAction implements Action {
    type = ActionTypes.INITIALIZE;

    constructor(public payload: BlueprintModel) { }
}

export class ChangeScopeAction implements Action {
    type = ActionTypes.CHANGE_SCOPE;

    constructor(public payload: BlueprintModel) { }
}

export class LoadProductsAction implements Action {
    type = ActionTypes.LOAD_PRODUCTS;

    constructor(public payload: BlueprintModel) { }
}

export class VerifyOptionAction implements Action {
    type = ActionTypes.VERIFY_OPTION;

    constructor(public payload: BlueprintModel) { }
}

export type Actions =
    InitializeAction |
    LoadProductsAction |
    ChangeScopeAction |
    VerifyOptionAction
