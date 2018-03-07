import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { InvestModel, Repository } from "./state";

@Injectable()
export class InvestService {

    constructor(private repo: Repository) { }

    get Invest(): Observable<InvestModel> {
        return this.repo.Invest;
    }


}
