import { IEntity } from "../../../EntryPoint";

export default interface IContent extends IEntity {
	idContent: number;
	nmContent: string;
	piContent: string;
	dsContent: string;
	qtLike: number;
	qtFavorite: number;
	qtView: number;
	qtConversion: number;
	idPublisher: number;
	dhPublish : Date
	shShowShareButton: boolean
	shShowActionButtons: boolean
	shShowFullscreenImage: boolean
	shShowPublisher: boolean
	shShowShortCard: boolean
	shShowTitle: boolean
	shShowDescription: boolean
	nrLanguage:number
	isPlaybook:boolean
	isActive:boolean
	qtEval: number;
	vlEval: number;
}
