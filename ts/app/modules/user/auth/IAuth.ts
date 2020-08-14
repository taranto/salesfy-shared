import { IEntity, IUser } from "../../../../EntryPoint";

export default interface IAuth extends IUser {

	crKeyPassword: string
	crKeyRefreshToken: string
	crKeyResetPassword: string
	dhKeyResetPasswordExpiration: Date
	crKeyEmailConfirmation: string
	isEmailConfirmed: boolean
	nrLanguage: number
	dhLastAccess: Date
}
