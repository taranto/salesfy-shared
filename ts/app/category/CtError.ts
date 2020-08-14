import { SConst, KeyEnum } from "../../EntryPoint";
import CtExcep from "./CtExcep";

export default class CtError {

	public key: number
	public nmMsg: string
	public techMsg?: string

	public static readonly somethingWentWrong = new CtError(0, KeyEnum.somethingWentWrong)
	public static readonly parametersAreMissing = new CtError(1, KeyEnum.somethingWentWrong, KeyEnum.parametersAreMissing)
	public static readonly userNotFoundInRefreshToken =
		new CtError(2, KeyEnum.somethingWentWrong, KeyEnum.userNotFoundInRefreshToken)
	public static readonly wrongLogoff = new CtError(3, KeyEnum.somethingWentWrong, KeyEnum.wrongLogoff)
	public static readonly databaseProblem = new CtError(4, KeyEnum.somethingWentWrong, KeyEnum.databaseProblem)
	public static readonly tokenProblem = new CtError(5, KeyEnum.somethingWentWrong, KeyEnum.tokenProblem)
	public static readonly sessionProblem = new CtError(6, KeyEnum.somethingWentWrong, KeyEnum.sessionProblem)
	public static readonly dbInsertProblem = new CtError(7, KeyEnum.somethingWentWrong, KeyEnum.dbInsertProblem)
	public static readonly redisProblem = new CtError(8, KeyEnum.somethingWentWrong, KeyEnum.redisProblem)
	public static readonly csrfProblem = new CtError(9, KeyEnum.somethingWentWrong, KeyEnum.csrfProblem)
	public static readonly unreachable = new CtError(10, KeyEnum.somethingWentWrong, KeyEnum.unreachable)
	public static readonly clusterProblem = new CtError(11, KeyEnum.somethingWentWrong, KeyEnum.clusterProblem)
	public static readonly envVarProblem = new CtError(12, KeyEnum.somethingWentWrong, KeyEnum.envVarProblem)
	public static readonly unhandledExcepError = new CtError(13, KeyEnum.somethingWentWrong, KeyEnum.unhandledExcepError)
	public static readonly uncaughtExcepError = new CtError(14, KeyEnum.somethingWentWrong, KeyEnum.uncaughtExcepError)
	public static readonly exitError = new CtError(15, KeyEnum.somethingWentWrong, KeyEnum.exitError)
	public static readonly beforeExitError = new CtError(16, KeyEnum.somethingWentWrong, KeyEnum.beforeExitError)
	public static readonly insertProblem = new CtError(17, KeyEnum.somethingWentWrong, KeyEnum.insertProblem)

	protected constructor(key: number, nmMsg: string, techMsg?: string) {
		this.key = key
		this.nmMsg = nmMsg
		this.techMsg = techMsg
	}

}
