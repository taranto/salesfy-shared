import { KeyEnum } from "../I18n/I18n";
import { SConst } from "../../EntryPoint";

export default class CtTag {

	public keyCtTag: number
	public nmCtTag: string

	public static readonly subject = new CtTag(1, KeyEnum.subject);
	public static readonly audience = new CtTag(2, KeyEnum.audience);
	public static readonly niche = new CtTag(3, KeyEnum.niche);

	private constructor(keyCtTag: number, nmCtTag: string) {
		this.keyCtTag = keyCtTag
		this.nmCtTag = nmCtTag
	}
}
