import { RegExpConst } from "../../EntryPoint";

export default class NumberUtil {
	public static random(size = 10): number {
		return +(Math.random() + "").substring(2, size + 2)
	}

	public static isInteger(obValue: any): boolean {
		try {
			if (RegExpConst.INTEGER.test(obValue)) {
				parseFloat(obValue);
				return true
			}
		} catch (err) { }
		return false
	}

	public static isNumber(obValue: any): boolean {
		return RegExpConst.NUMBER.test(obValue)
	}

	public static getRandomInt(max = 9): number {
		return Math.floor(Math.random() * Math.floor(max));
	}
}
