import { IEntity } from "../../../EntryPoint";

export default interface IUserChannel extends IEntity {

	idUserChannel: number
	idChannel: number
	idUser: number
}
