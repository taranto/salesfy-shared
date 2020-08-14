import { IEntity } from "../../../EntryPoint";

export default interface IUserTag extends IEntity {

	idUserTag: number
	idTag: number
	idUser: number
	dhRegister:Date
}
