import { ResultModel } from "../../models/resultModel";

export interface UserLoginResponseModel extends ResultModel{
    sccess_token: string;
}