import { IEntity } from "../../../EntryPoint";
import IEmail from "./IEmail";

export default interface IEmailFailure extends IEmail, IEntity {

	idEmailFailure: number
	cdErrorResponse: number
	dsErrorStack: string
	dhFailure: Date
	qtRetry: number
	isSent: boolean
}
