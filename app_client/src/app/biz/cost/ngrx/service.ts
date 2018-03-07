import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { CostModel, Product, Repository } from "./../../../state";

@Injectable()
export class CostService {

  constructor(private repo: Repository) { }

  get Cost(): Observable<CostModel> {
    return this.repo.Cost;
  }

  get Products(): Product[] {
    return this.repo.getProducts();
  }
}
