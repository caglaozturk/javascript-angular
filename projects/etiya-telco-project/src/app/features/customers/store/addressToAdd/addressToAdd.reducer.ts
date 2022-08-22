import { createReducer, on } from '@ngrx/store'
import { Customer } from '../../models/customer'
import { setAddressInfo } from './addressToAdd.actions'

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
    addresses: undefined,
    contactMedium: undefined,
    billingAccounts: undefined,
}

export const addressToAddReducer = createReducer(
    initialState,
    on(setAddressInfo, (state, action) => {
        const newState:Customer = {...state, ...action}
        return newState;
    })
)