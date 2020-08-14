import { IEntity } from "../../EntryPoint";

export default interface IWorkspace extends IEntity {
	idWorkspace: number;
	nmWorkspace: string;
	piWorkspace: string;
	idUserResponsible: number;
	isActive: boolean;
}
