import { Pod } from "./pod";
import { Service } from "./service";
import { BaseModel } from '../../common/types/traits/baseModel';
export declare class Statefulset extends BaseModel {
    pods: Array<Pod>;
    services: Array<Service>;
    constructor(data: any);
}
