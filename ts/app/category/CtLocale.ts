import { SConst } from "../../EntryPoint";

export default class CtLocale {

	public keyCtLocale: number
	public nmCtLocale: string

	public static readonly portuguese = new CtLocale(0, "pt");
	public static readonly english = new CtLocale(1, "en");

	private constructor(keyCtLocale: number, nmCtLocale: string) {
		this.keyCtLocale = keyCtLocale
		this.nmCtLocale = nmCtLocale
	}

	public static get(obKey: number | string): CtLocale {
		if (typeof obKey == "string") {
			return CtLocale.getByName(obKey)
		}
		if (typeof obKey == "number") {
			return CtLocale.getByKey(obKey)
		}
		return CtLocale.portuguese
	}

	public static getByName(nmCtLocale: string): CtLocale {
		switch (nmCtLocale) {
			case CtLocale.english.nmCtLocale:
				return CtLocale.english
			default:
				return CtLocale.portuguese
		}
	}

	public static getByKey(keyCtLocale: number): CtLocale {
		switch (keyCtLocale) {
			case CtLocale.english.keyCtLocale:
				return CtLocale.english
			default:
				return CtLocale.portuguese
		}
	}
}
