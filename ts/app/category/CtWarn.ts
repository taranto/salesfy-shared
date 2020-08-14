import { KeyEnum } from "../I18n/I18n";

export default class CtWarn {

	public key: number
	public nmMsg: string

	public static readonly nmKeyValFormatLenghtMin = new CtWarn(0, KeyEnum.nmKeyValFormatLenghtMin)
	public static readonly nmKeyValFormatLenghtMax = new CtWarn(1, KeyEnum.nmKeyValFormatLenghtMax)
	public static readonly nmKeyValFormatLenght = new CtWarn(2, KeyEnum.nmKeyValFormatLenght)
	public static readonly nmKeyValFormatLowercase = new CtWarn(3, KeyEnum.nmKeyValFormatLowercase)
	public static readonly nmKeyValFormatNumbers = new CtWarn(4, KeyEnum.nmKeyValFormatNumbers)
	public static readonly nmKeyValFormatCharacters = new CtWarn(5, KeyEnum.nmKeyValFormatCharacters)
	public static readonly valWeblink = new CtWarn(6, KeyEnum.valWeblink)
	public static readonly valEmail = new CtWarn(7, KeyEnum.valEmail)
	public static readonly valueOutOfLimits = new CtWarn(8, KeyEnum.valueOutOfLimits)

	public static readonly required = new CtWarn(9, KeyEnum.required)
	public static readonly nmKeyRequired = new CtWarn(10, KeyEnum.nmKeyRequired)
	public static readonly nmKeyProhibited = new CtWarn(11, KeyEnum.nmKeyProhibited)
	public static readonly nmKeyInWrongFormat = new CtWarn(12, KeyEnum.nmKeyInWrongFormat)
	public static readonly passwordsWereNotTheSame = new CtWarn(13, KeyEnum.passwordsWereNotTheSame)
	public static readonly cannotRevokeLastAuth = new CtWarn(14, KeyEnum.cannotRevokeLastAuth)

	protected constructor(key: number, nmMsg: string, techMsg?: string) {
		this.key = key
		this.nmMsg = nmMsg
	}
}
