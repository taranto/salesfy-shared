import { IEntity } from "../../../EntryPoint";

export default interface IChannel extends IEntity {
	idChannel: number;
	nmChannel: string;
	piChannel: string;
	vlSort: number;
	isPlaybook: boolean;
	piIcon: string;
	idPublisher: string;
}
