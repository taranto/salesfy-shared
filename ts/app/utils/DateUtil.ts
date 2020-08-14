import NumberUtil from "./NumberUtil";
import StringUtil from "./StringUtil";
import { TDate } from "../../EntryPoint";

export default class DateUtil {

	public static isDate(obValue:any) : boolean {
		try {
			if (obValue instanceof Date) {
				return true
			}
			if (NumberUtil.isNumber(Date.parse(obValue))) {
				return true
			}
		} catch(err){}
		return false
	}

	public static beautify(obValue?: Date|number, nmForcedType?: TDate) {
		if (obValue == undefined) {
			obValue = new Date()
		}
		if (typeof obValue == 'number') {
			obValue = new Date(obValue)
		}
		const day = StringUtil.addLeftZero((obValue.getDate()) + "");
		const month = StringUtil.addLeftZero((obValue.getMonth() + 1) + "");
		const year = obValue.getFullYear();
		let beautified = `${year}-${month}-${day}`;
		if (nmForcedType == undefined || nmForcedType == "DateSec" || nmForcedType == "DateMili") {
			const sec = StringUtil.addLeftZero((obValue.getSeconds()) + "");
			const min = StringUtil.addLeftZero((obValue.getMinutes()) + "");
			const hour = StringUtil.addLeftZero((obValue.getHours()) + "");
			beautified = `${beautified} ${hour}:${min}:${sec}`;
		}
		if (nmForcedType == "DateMili") {
			const mili = StringUtil.addLeftZero((obValue.getMilliseconds()) + "", 4);
			beautified = `${beautified}:${mili}`;
		}
		return beautified;
	}
}
