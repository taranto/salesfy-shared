import { IEntity } from "../../../EntryPoint";

export default interface INotifyMsg extends IEntity {

	idNotifyMsg: number
	snVersionMin: string
	snVersionMax: string
	keyMsg: string
	dsMsgRawEn: string
	dsMsgRawPt: string
	isBlockable: boolean
	isUpdatable: boolean
	dhStart:Date
	dhEnd:Date
	ctSystem: number
}
