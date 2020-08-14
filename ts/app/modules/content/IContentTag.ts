import { IEntity } from "../../../EntryPoint";

export default interface IContentTag extends IEntity {
	idContentTag: number;
	idTag: number;
	idContent: number;
}
