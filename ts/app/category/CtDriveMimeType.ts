import CtContent from "./CtContent";

export default class CtDriveMimeType {

	public key: number
	public nm: string

	public static readonly spreadsheet = new CtDriveMimeType(1, "application/vnd.google-apps.spreadsheet");
	public static readonly document = new CtDriveMimeType(2,"application/vnd.google-apps.document");
	public static readonly folder = new CtDriveMimeType(3, "application/vnd.google-apps.folder");

	private constructor(key: number, nm: string) {
		this.key = key
		this.nm = nm
	}

	public toCtContent() : CtContent {
		let ctContent : CtContent
		switch (this) {
			case CtDriveMimeType.spreadsheet : ctContent = CtContent.spreadsheet ; break;
			case CtDriveMimeType.document : ctContent = CtContent.text ; break;
			case CtDriveMimeType.folder : ctContent = CtContent.post ; break;
			default : ctContent = CtContent.post
		}
		return ctContent
	}

	public static get(nm:string) : CtDriveMimeType {
		let ctDriveMimeType : CtDriveMimeType
		switch (nm) {
			case CtDriveMimeType.spreadsheet.nm : ctDriveMimeType = CtDriveMimeType.spreadsheet ; break;
			case CtDriveMimeType.document.nm : ctDriveMimeType = CtDriveMimeType.document ; break;
			case CtDriveMimeType.folder.nm : ctDriveMimeType = CtDriveMimeType.folder ; break;
			default : ctDriveMimeType = CtDriveMimeType.folder
		}
		return ctDriveMimeType
	}
}
