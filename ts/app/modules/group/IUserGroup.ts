import { IEntity } from "../../../EntryPoint";

export default interface IUserGroup extends IEntity {

	idUserGroup: number
	idGroup: number
	idUser: number
	isFavorite: boolean
	idCtUserGroupAccess:number
}
