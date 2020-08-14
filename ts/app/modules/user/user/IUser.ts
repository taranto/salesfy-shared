import { IEntity } from "../../../../EntryPoint";
import IAuth from "../auth/IAuth";

export default interface IUser extends IEntity {

	idUser: number
	emUser: string
	nmUser: string
	dhRegister: Date
	snTelephone: string
	snWhatsapp: string
	piAvatar: string
	nmCompany: string
	nmCargo: string
	lkFacebook: string
	lkLinkedin: string
	dsTestimony: string
	lkWebsite: string
	keyFacebook: string
	keyGoogle: string
}
