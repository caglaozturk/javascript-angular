import { createAction, props } from "@ngrx/store";
import { Address } from "../../models/address";

export const setAddressInfo = createAction(
    '[Address] Set Address Info',
    props<Address>()
)