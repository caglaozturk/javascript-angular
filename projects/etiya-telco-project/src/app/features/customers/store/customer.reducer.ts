import { Customer } from "../models/customer";
import { addressToAddReducer } from "./addressToAdd/addressToAdd.reducer";
import { contactMediumToAddReducer } from "./contactMediumToAdd/contactMediumToAdd.reducer";
import { customerToAddReducer } from "./customerToAdd/customerToAdd.reducer";

export interface CustomerState {
    customerToAdd: Customer
}

export const customersReducers = {
    customerToAdd: customerToAddReducer,
    addressToAdd: addressToAddReducer,
    contactMediumToAdd: contactMediumToAddReducer
}