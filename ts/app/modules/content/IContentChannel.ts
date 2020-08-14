import { IEntity } from "../../../EntryPoint";

export default interface IContentChannel extends IEntity {
	idContentChannel: number;
	idChannel: number;
	idContent: number;
	vlSort: number;
}
