import { IEntity } from "../../../EntryPoint";

export default interface IChannelGroup extends IEntity {
	idChannelGroup: number;
	idChannel: number;
	idGroup: number;
}
