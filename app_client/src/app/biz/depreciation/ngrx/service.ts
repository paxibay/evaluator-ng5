import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { DepreciationModel, Repository } from "./state";

@Injectable()
export class DepreciationService {

  constructor(private repo: Repository) { }

    get Depreciation(): Observable<DepreciationModel> {
        return this.repo.Depreciation;
    }


}
