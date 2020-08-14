import { SConst, KeyEnum } from "../../EntryPoint";
import CtWarn from "./CtWarn";

export default class CtExcep {

	public key: number
	public nmMsg: string

	public static readonly refreshTokenDiffFromStored = new CtExcep(0, KeyEnum.refreshTokenDiffFromStored)
	public static readonly refreshTokenUndefined = new CtExcep(1, KeyEnum.refreshTokenUndefined)
	public static readonly accessTokenUndefined = new CtExcep(2, KeyEnum.accessTokenUndefined)
	public static readonly refreshTokenExpired = new CtExcep(3, KeyEnum.refreshTokenExpired)
	public static readonly accessTokenExpired = new CtExcep(4, KeyEnum.accessTokenExpired)
	public static readonly refreshTokenInvalid = new CtExcep(5, KeyEnum.refreshTokenInvalid)
	public static readonly accessTokenInvalid = new CtExcep(6, KeyEnum.accessTokenInvalid)

	public static readonly userNotAuthorized = new CtExcep(7, KeyEnum.userNotAuthorized)
	public static readonly operationNotPermitted = new CtExcep(8, KeyEnum.operationNotPermitted)

	public static readonly nmKeyNotFound = new CtExcep(9, KeyEnum.nmKeyNotFound)
	public static readonly nmKeyAlreadyExists = new CtExcep(10, KeyEnum.nmKeyAlreadyExists)
	public static readonly incorrectPassword = new CtExcep(11, KeyEnum.incorrectPassword)
	public static readonly authenticationProblem = new CtExcep(12, KeyEnum.authenticationProblem)
	public static readonly incorrectUserEmailConfirmationKey = new CtExcep(13, KeyEnum.incorrectUserEmailConfirmationKey)
	public static readonly emailAlreadyValidated = new CtExcep(14, KeyEnum.emailAlreadyValidated)

	public static readonly wrongRoute = new CtExcep(15, KeyEnum.wrongRoute)
	public static readonly tokenInvalid = new CtExcep(16, KeyEnum.tokenInvalid)

	public static readonly failedToRetrieveLinkData = new CtExcep(17, KeyEnum.failedToRetrieveLinkData)
	public static readonly bulkLimitExceeded = new CtExcep(18, KeyEnum.bulkLimitExceeded)

	public static readonly pageSizeExceeded = new CtExcep(19, KeyEnum.pageSizeExceeded)
	public static readonly notHtmlPage = new CtExcep(20, KeyEnum.notHtmlPage)
	public static readonly notAllowedToRetreiveData = new CtExcep(21, KeyEnum.notAllowedToRetreiveData)

	protected constructor(key: number, nmMsg: string, techMsg?: string) {
		this.key = key
		this.nmMsg = nmMsg
	}
}
