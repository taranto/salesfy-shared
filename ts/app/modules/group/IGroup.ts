import { IEntity } from "../../../EntryPoint";

export default interface IGroup extends IEntity {

	idGroup: number
	nmGroup: string
	isActive: boolean
}
