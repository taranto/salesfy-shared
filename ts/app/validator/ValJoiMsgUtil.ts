import { KeyEnum } from "../I18n/I18n";

export default class ValJoiMsgUtil {

	public static joiStringSchemaTelephone(min=9, max=13) : string {
		return KeyEnum.nmKeyValFormatNumbers
	}

	public static joiStringSchemaEmail() : string {
		return KeyEnum.valEmail
	}

	public static joiStringSchemaWeblink() : string {
		return KeyEnum.valWeblink
	}

	public static joiStringSchemaName(min=3, max=60) : string {
		return KeyEnum.nmKeyValFormatCharacters
	}

	public static joiStringSchemaPassword(min=8, max=30) : string {
		return KeyEnum.nmKeyValFormatLenght
	}
}
