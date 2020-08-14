import { IEntity } from "../../EntryPoint";

export default interface IWorkspaceGroup extends IEntity {
	idWorkspaceGroup: number;
	idWorkspace: number;
	idGroup: number;
}
