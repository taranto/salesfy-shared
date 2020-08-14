import { StringUtil, DateUtil, NumberUtil, BooleanUtil, JsonUtil } from "../../EntryPoint";
import ArrayUtil from "../utils/ArrayUtil";

export default class ValHN {

	public static joHNotation: any = {
		key: { mtVal: StringUtil.isStringOrInteger },
		cd: { mtVal: NumberUtil.isInteger },
		id: { mtVal: NumberUtil.isInteger },
		nm: { mtVal: StringUtil.isString },
		ds: { mtVal: StringUtil.isString },
		lt: { mtVal: StringUtil.isChar },
		em: { mtVal: StringUtil.isEmail },

		is: { mtVal: BooleanUtil.isBooleanPureOrString },
		has: { mtVal: BooleanUtil.isBooleanPureOrString },
		sh: { mtVal: BooleanUtil.isBooleanPureOrString },
		ac: { mtVal: BooleanUtil.isBooleanPureOrString },
		re: { mtVal: BooleanUtil.isBooleanPureOrString },
		us: { mtVal: BooleanUtil.isBooleanPureOrString },
		can: { mtVal: BooleanUtil.isBooleanPureOrString },
		on: { mtVal: BooleanUtil.isBooleanPureOrString },
		sb: { mtVal: BooleanUtil.isBooleanPureOrString },
		was: { mtVal: BooleanUtil.isBooleanPureOrString },

		sn: { mtVal: StringUtil.isNumberFormatted },
		nr: { mtVal: NumberUtil.isInteger },
		qt: { mtVal: NumberUtil.isInteger },
		vl: { mtVal: NumberUtil.isNumber },
		pc: { mtVal: NumberUtil.isNumber },

		mi: { mtVal: NumberUtil.isInteger },
		hr: { mtVal: DateUtil.isDate },
		dh: { mtVal: DateUtil.isDate },
		dt: { mtVal: DateUtil.isDate },

		pi: { mtVal: StringUtil.isString },
		lk: { mtVal: StringUtil.isLink },
		fi: { mtVal: StringUtil.isUnixFolder },

		cr: { mtVal: StringUtil.isCrypted },
		un: { mtVal: StringUtil.isString },

		ar: { mtVal: ValHN.isHNArrayValid },
		jo: { mtVal: JsonUtil.joHNJsonValid },
		ct: { mtVal: JsonUtil.joHNJsonValid },
		bl: { mtVal: ()=> true}, //blob
		b64: { mtVal: ()=> true}, //base64
		bf: { mtVal: ()=> true} //buffer
		//cn: TODO numeros por ',
		//sn: TODO strings por ',
	}

	public static toArCamelCase(arNmKeyParam:string[]) : string[] {
		const arNmKeyParamCC : string[] = []
		arNmKeyParam.forEach((nmKeyParam) => {
			const nmKeyParamCC =  this.toCamelCase(nmKeyParam)
			arNmKeyParamCC.push(nmKeyParamCC)
		})
		return arNmKeyParamCC
	}

	public static toCamelCase(nmKey:string) : string {
		const nmKeyPrefix = nmKey.substring(0, 2)
		const nmKeyUppercase = nmKey.substring(2, 3).toUpperCase()
		const nmKeyRemainder = nmKey.substring(3)
		const nmKeyParamCC = nmKeyPrefix + nmKeyUppercase + nmKeyRemainder
		return nmKeyParamCC
	}

	public static getInvalidParams(joParam: any, acEmpty=false, arNmKeySpecific?:string[]): string[] {
		let nmKeysInvalid = []
		if (!arNmKeySpecific || arNmKeySpecific.length==0) {
			arNmKeySpecific = Object.keys(joParam)
		}
		nmKeysInvalid = arNmKeySpecific.filter(nmKey => {
			return !ValHN.valNmKey(nmKey, joParam[nmKey], acEmpty)
		})
		return nmKeysInvalid
	}

	public static joParamValidate(joParam: any, nmKeySpecific?:string[]): boolean {
		let nmKeysValid = []
		if (nmKeySpecific) {
			nmKeysValid = nmKeySpecific.filter(nmKey => {
				return ValHN.valNmKey(nmKey, joParam[nmKey])
			})
		} else {
			nmKeysValid = Object.keys(joParam).filter(nmKey => {
				return ValHN.valNmKey(nmKey, joParam[nmKey])
			})
		}
		return nmKeysValid.length==0
	}

	public static valNmKey(nmKey: string, obValue: any, acEmpty=false): boolean {
		if (acEmpty && (obValue===undefined || obValue===null)) {
			return true
		}
		const nmKeyPrefix = ValHN.getHnPrefix(nmKey)
		if (!nmKeyPrefix) {
			return false
		}
		const isTypeValid = ValHN.valNmKeyPrefix(nmKeyPrefix, obValue, nmKey)
		return isTypeValid
	}

	private static valNmKeyPrefix(nmKeyPrefix: string, obValue: any, nmKey?: string): boolean {
		const joHN = ValHN.getJoHNPrefix(nmKeyPrefix)
		if (!joHN) {
			return false
		}
		const mtVal = joHN.mtVal
		const isTypeValid = ValHN.hnValidateCallMethod(mtVal, obValue, nmKey)
		return isTypeValid
	}

	private static hnValidateCallMethod(mtValidation: any, obValue: any, nmKey?:string): boolean {
		return mtValidation.call(this, obValue, nmKey)
	}

	public static getHnPrefix(nmKey: string): string|undefined {
		const isUppercase23 = nmKey.substring(2, 3) === nmKey.substring(2, 3).toUpperCase()
			&& !NumberUtil.isInteger(nmKey.substring(2, 3))
		if (isUppercase23) {
			return nmKey.substring(0, 2)
		}
		const isUppercase34 = nmKey.substring(3, 4) === nmKey.substring(3, 4).toUpperCase()
		if (isUppercase34) {
			return nmKey.substring(0, 3)
		}
		return undefined
	}

	private static getJoHNPrefix(nmPrefix: string): any {
		return ValHN.joHNotation[nmPrefix.toLowerCase()]
	}

	private static isHNArrayValid(obValue:any, nmKey:string) : boolean {
		const isArrayOfSameType = ArrayUtil.isArrayOfSameType(obValue)
		if (!isArrayOfSameType) {
			return false
		}
		const arObValue : any[] = obValue
		const nmKeyNoAr = nmKey.substring(2, nmKey.length)
		const nmKeyPrefixNoAr = ValHN.getHnPrefix(nmKeyNoAr)
		if (!nmKeyPrefixNoAr) {
			return false
		}
		const anObValueInvalid = arObValue.find(anObValue=>{
			return !ValHN.valNmKeyPrefix(nmKeyPrefixNoAr, anObValue, nmKeyNoAr)
		})
		const isHNArrayValid = anObValueInvalid == undefined
		return isHNArrayValid
	}

	public static getArStringPrefix() : string[] {
		return ["ds", "nm", "lk", "un", "pi", "fi", "em"]
	}

	public static getStringHNKeys(joParam: any): string[] {
		const arNmKeyParam = Object.getOwnPropertyNames(joParam);
		const arNmStringKeys: any = arNmKeyParam.filter((nmKeyParam: string) => {
			const nmKeyParamPrefix = ValHN.getHnPrefix(nmKeyParam)
			if (!nmKeyParamPrefix) {
				return false;
			}
			const nmKeyParamPrefixLowercase = nmKeyParamPrefix.toLowerCase();
			const isParamFound = ValHN.getArStringPrefix().indexOf(nmKeyParamPrefixLowercase) != -1
			return isParamFound
		})
		return arNmStringKeys;
	}
}
