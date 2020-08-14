import { IEntity } from "../../../EntryPoint";

export default interface IChannelTag extends IEntity {
	idChannelTag: number;
	idTag: number;
	idChannel: number;
}
