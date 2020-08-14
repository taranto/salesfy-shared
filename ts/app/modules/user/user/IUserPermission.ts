import { IEntity } from "../../../../EntryPoint";

export default interface IUserPermission extends IEntity {

	idUserPermission:number
	idUser: number
	canPostSeContent:boolean
	canPostSeChannel:boolean
	canSimulateSomeone:boolean
	canReloadEnv:boolean
	canPostWorkspace:boolean

}
