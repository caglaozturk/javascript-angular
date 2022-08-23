import { createReducer, on } from '@ngrx/store'
import { Address } from '../../models/address'
import { Customer } from '../../models/customer'
import { addAddressInfo, setContactMediumInfo, setDemographicInfo } from './customerToAdd.actions'

const initialState: Customer = {
    id: undefined,
    customerId: undefined,
    firstName: undefined,
    middleName: undefined,
    lastName: undefined,
    birthDate: undefined,
    gender: undefined,
    nationalityId: undefined,
    role: undefined,
    motherName: undefined,
    fatherName: undefined,
    addresses: [],
    contactMedium: undefined,
    billingAccounts: []
}

export const customerToAddReducer = createReducer(
    initialState,
    on(setDemographicInfo, (state, action) => {
        const newState:Customer = {...state, ...action}
        return newState;
    }),
    on(addAddressInfo, (state, action) => {
        const newState:Customer = {...state, addresses:[...state.addresses as Address[],action]};
        return newState;
    }),
    on(setContactMediumInfo, (state, action) => {
        const newState:Customer = {...state, contactMedium: action}
        return newState;
    })
)