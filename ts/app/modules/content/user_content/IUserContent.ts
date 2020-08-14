import { IEntity } from "../../../../EntryPoint";

export default interface IUserContent extends IEntity {
	idUserContent: number;
	idUser: number;
	idContent: number;
	isLike: boolean;
	isFavorite: boolean;
	qtView: number;
	qtConversion: number;
	vlEval: number;
}
