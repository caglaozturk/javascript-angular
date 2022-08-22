import { createAction, props } from "@ngrx/store";
import { CustomerDemographicInfo } from "../../models/customerDemographicInfo";

export const setDemographicInfo = createAction(
    '[Customers] Set Demographic Info',
    props<CustomerDemographicInfo>()
)