import * as appModel from './app-state';

// contract
export interface Tax {
    id?: number;
    name?: string;
    rate?: number;
    unit?: string;
    basedOn?: string;
    marked?: boolean;
    taxList?: [{}];
}

// contract
export interface ValueAddedTax {
    industry?: string;
    inputValue?: number;
    outputValue?: number;
    description?: string;
}

// Value Object
export class TaxOption {
    unitOptions?: Array<appModel.IOption>;
    ruleOptions?: Array<appModel.IOption>;
}

// Value Object
export class TaxTypes {
    default?: [{ id?: number, name?: string, taxes?: Tax[] }];
    customer?: [{ id?: number, name?: string, taxes?: Tax[] }];
    taxes?: Tax[];
}

// Entity
export interface ProductRevenue {
    taxId?: number;
    productId?: number;
    name?: string;
    valueAddedTax?: ValueAddedTax;
    taxes?: Tax[];
}

enum taxMode {
    'Composite',
    'Separate'
}

// Model Defination
export class RevenueModel {
    hasLoaded?: false;
    valueObject?: {
        taxOption?: TaxOption;
        taxTypes?: TaxTypes;
    };
    entity?: {
        name?: string;
        taxMode?: string;
        projectRevenue?: ProductRevenue[];
    };
}
