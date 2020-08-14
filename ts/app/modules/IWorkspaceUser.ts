import { IEntity } from "../../EntryPoint";

export default interface IWorkspaceUser extends IEntity {
	idWorkspaceUser: number;
	idWorkspace: number;
	idUser: number;
}
