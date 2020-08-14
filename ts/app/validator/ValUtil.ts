import { RegExpConst } from "../../EntryPoint";

export default class ValUtil {
// https://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149
	public static rgPassword() : RegExp {
		return RegExpConst.PASSWORD
	}

	// public static rgWebLink() : RegExp {
	// 	return RegExpConst.WEB_LINK
	// }

	public static rgEmail() : RegExp {
		return RegExpConst.EMAIL
	}

	public static rgLogin() : RegExp {
		return RegExpConst.LOGIN
	}

	public static rgNumber() : RegExp {
		return RegExpConst.NUMBER
	}

	public static rgName() : RegExp {
		return RegExpConst.NAME
	}
}
