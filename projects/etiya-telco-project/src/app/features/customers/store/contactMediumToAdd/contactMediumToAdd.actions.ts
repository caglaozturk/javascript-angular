import { createAction, props } from "@ngrx/store";
import { ContactMedium } from "../../models/contactMedium";

export const setContactMediumInfo = createAction(
    '[ContactMedium] Set ContactMedium Info',
    props<ContactMedium>()
)