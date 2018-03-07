import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { FundsModel, Repository } from "./../../../state";

@Injectable()
export class FundsService {

  constructor(private repo: Repository) { }

    get Funds(): Observable<FundsModel> {
        return this.repo.Funds;
    }


}
