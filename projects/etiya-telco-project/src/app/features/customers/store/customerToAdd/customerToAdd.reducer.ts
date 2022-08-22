import { createReducer, on } from '@ngrx/store'
import { Customer } from '../../models/customer'
import { setDemographicInfo } from './customerToAdd.actions'

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

export const customerToAddReducer = createReducer(
    initialState,
    on(setDemographicInfo, (state, action) => {
        const newState:Customer = {...state, ...action}
        return newState;
    })
)