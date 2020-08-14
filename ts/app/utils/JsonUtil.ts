import StringUtil from "./StringUtil";
import BooleanUtil from "./BooleanUtil";
import GeneralUtil from "./GeneralUtil";
import { ValHN } from "../../EntryPoint";

export default class JsonUtil {

	public static getArNmKeyMissingInArJoParam(arJoParam: any[], ...arNmKey: string[]): string[][] {
		const arJoParamMissing: any = []
		arJoParam.forEach((joParam: any) => {
			const joParamMissing = JsonUtil.getArNmKeyMissingInJoParam(joParam, ...arNmKey)
			if (!!joParamMissing && joParamMissing.length > 0) {
				arJoParamMissing.push(joParamMissing)
			}
		})
		return arJoParamMissing
	}

	public static getArNmKeyMissingInJoParam(joParam: any, ...arNmKey: string[]): string[] {
		const joParamMissing: string[] = []
		arNmKey.forEach(nmKey => {
			if (joParam[nmKey] == undefined) {
				joParamMissing.push(nmKey)
			}
		})
		return joParamMissing
	}

	public static filterArJoKeys(arJoParam: any[], ...arNmKey: string[]): any[] {
		const arJoParamNew: any = []
		arJoParam.forEach((joParam: any) => {
			const joParamNew = JsonUtil.filterJoKeys(joParam, ...arNmKey)
			arJoParamNew.push(joParamNew)
		})
		return arJoParamNew
	}

	public static filterJoKeys(joParam: any, ...arNmKey: string[]): any {
		const joParamNew: any = {}
		arNmKey.forEach(nmKey => {
			if (joParam[nmKey] != undefined) {
				joParamNew[nmKey] = joParam[nmKey]
			}
		})
		return joParamNew
	}

	// has no uses -----------------------
	// public static isValArJoHN(arJoParam: any[], acEmpty=false, ...arNmKey: string[]) : boolean {
	// 	arJoParam.forEach((joParam: any) => {
	// 		const isValid = JsonUtil.isValJoHN(joParam, acEmpty, ...arNmKey)
	// 		if (!isValid) {
	// 			return false
	// 		}
	// 	})
	// 	return true
	// }

	// has no uses -----------------------
	// public static isValJoHN(joParam: any, acEmpty=false, ...arNmKey: string[]) : boolean {
	// 	const invalidParams = ValHN.getInvalidParams(joParam, acEmpty, arNmKey)
	// 	if (invalidParams.length > 0) {
	// 		return false
	// 	}
	// 	return true
	// }

	public static isJoEmpty(joParam: any): boolean {
		for (const key in joParam) {
			if (joParam.hasOwnProperty(key)) {
				return false;
			}
		}
		return true;
	}

	public static mergeJoPerKey(nmKeyMerge: string, arJoParam1: any, arJoParam2: any, shTagMerged = false): any[] {
		const arJoResult = arJoParam1
		const joTagMerged = { isMerged: false }
		if (shTagMerged) {
			joTagMerged.isMerged = true
		}
		arJoResult.forEach((joParam1: any, index: number) => {
			arJoParam2.forEach((joParam2: any) => {
				if (joParam2[nmKeyMerge] == joParam1[nmKeyMerge]) {
					const joMerged = { ...joParam2, ...joParam1, ...joTagMerged }
					arJoResult[index] = joMerged
				}
			})
		})
		return arJoResult
	}

	public static mergeToAll(arJoItem: any[], joToMerge: any): any[] {
		const arJoItemMerged: any[] = []
		arJoItem.forEach((joItem: any) => {
			joItem = {
				...joItem,
				...joToMerge
			}
			arJoItemMerged.push(joItem)
		})
		return arJoItemMerged
	}

	public static isSameArJo(arJoParam1: any, arJoParam2: any, shIgnoreEmptyKeys = false, ...arNmKeysEval: string[])
		: boolean {
		let arrBool: any = []
		let result = [false]

		arJoParam1.forEach((joParam1: {}, ind: number) => {
			(JsonUtil.isSameJo(joParam1, arJoParam2[ind], shIgnoreEmptyKeys, ...arNmKeysEval))
				? arrBool.push(true)
				: arrBool.push(false)
		})

		arrBool.includes(false) ? null : result[0] = true
		return result[0]
	}

	public static isSameJo(joParam1: any, joParam2: any, shIgnoreEmptyKeys = false, ...arNmKeysEval: string[]): boolean {
		let arNmKeys = Object.keys(joParam1)
		let arrBool: any = []
		let result = [false]

		arNmKeysEval.length > 0 ? arNmKeys = arNmKeysEval : null

		arNmKeys.forEach((nmKey: any) => {
			!shIgnoreEmptyKeys && joParam1[nmKey] == undefined
				? arrBool.push(false)
				: arrBool.push(true)

			joParam1[nmKey] !== joParam2[nmKey]
				? arrBool.push(false)
				: arrBool.push(true)
		})
		arrBool.includes(false) ? null : result[0] = true
		return result[0]
	}


	public static isSameArJoKeys(arJoParam1: any, arJoParam2: any, shIgnoreEmptyKeys = false, ...arNmKeysEval: string[])
		: boolean {
		arJoParam1.forEach((joParam1: any) => {
			let isSame = false
			arJoParam2.forEach((joParam2: any) => {
				isSame = isSame || JsonUtil.isSameJoKeys(joParam1, joParam2, shIgnoreEmptyKeys, ...arNmKeysEval)
			})
			if (!isSame) {
				return false
			}
		})
		return true
	}

	public static isSameJoKeys(joParam1: any, joParam2: any, shIgnoreEmptyKeys = false, ...arNmKeysEval: string[]): boolean {
		let arNmKeys = Object.keys(joParam1)
		if (arNmKeysEval.length > 0) {
			arNmKeys = arNmKeysEval
		}
		arNmKeys.forEach((nmKey: any) => {
			if (!shIgnoreEmptyKeys && joParam1[nmKey] == undefined) {
				return false
			}
			if (joParam1[nmKey] != joParam2[nmKey]) {
				return false;
			}
		})
		return true
	}

	public static isFilterWorking(arJoItem: any, arNmKeyResult: string[], obFilterWord: any) {
		const filteredBody = arJoItem.filter((aBodyItem: any) => {
			return JsonUtil.isWordFoundInKeys(aBodyItem, obFilterWord, ...arNmKeyResult)
		})
		if (arJoItem.length != filteredBody.length) {
			return false
		}
		return true
	}

	public static isWordFoundInKeys(joItem: any, obFilterWord: any, ...arNmKeyResult: string[]): boolean {
		let isValueFoundInKey = false;
		arNmKeyResult.forEach(nmKeyResult => {
			isValueFoundInKey = isValueFoundInKey || JsonUtil.isWordFoundInKey(joItem, obFilterWord, nmKeyResult);
		})
		return isValueFoundInKey
	}

	public static isWordFoundInKey(joItem: any, obFilterWord: any, nmKeyResult: string) {
		let isFound = false
		const obValue = joItem[nmKeyResult];
		if (obValue != null) {
			if (StringUtil.isString(obValue)) {
				const foundInKeyNow = obValue.toLowerCase().indexOf(obFilterWord.toLowerCase()) != -1;
				isFound = foundInKeyNow;
			}
			else if (BooleanUtil.isBooleanPureOrString(obValue)) {
				const foundInKeyNow = obValue == obFilterWord;
				isFound = foundInKeyNow;
			}
		}
		return isFound
	}

	// has no uses
	// public static isMissingParamsEach(arJoItem: any): boolean {
	// 	let failed = false
	// 	arJoItem.forEach((anItem: any) => {
	// 		if (!failed && anItem.length > 0) {
	// 			failed = true
	// 		}
	// 	})
	// 	return failed
	// }

	// public static isMissingParams(joItem: any, arNmParam: string[]): boolean {
	// 	const missing = JsonUtil.getMissingParams(joItem, arNmParam)
	// 	return missing.length > 0
	// }

	public static getMissingParamsEach(arJoItem: any, arNmParam: string[]): string[][] {
		const missing: string[][] = []
		arJoItem.forEach((joItem: any) => {
			missing.push(JsonUtil.getMissingParams(joItem, arNmParam))
		})
		return missing
	}

	public static getMissingParams(joItem: any, arNmExpectedParams: string[]): string[] {
		if ((joItem instanceof Array)) {
			return []
		}
		const missings: string[] = []
		const arNmAtItem = Object.keys(joItem)
		arNmExpectedParams.forEach((nmParam: string) => {
			if (arNmAtItem.indexOf(nmParam) == -1) {
				missings.push(nmParam)
			}
		})
		return missings
	}

	public static getExtraParamsEach(arJoItem: any, arNmExpectedParams: string[]): string[][] {
		const extras: string[][] = []
		arJoItem.forEach((joItem: string) => {
			extras.push(JsonUtil.getExtraParams(joItem, arNmExpectedParams))
		})
		return extras
	}

	public static getExtraParams(joItem: any, arNmExpectedParams: string[]): string[] {
		const itemCopy = GeneralUtil.copy(joItem)
		arNmExpectedParams.forEach((nmParam: string) => {
			delete itemCopy[nmParam]
		})
		const nmKeys = Object.keys(itemCopy)
		return nmKeys
	}

	public static isThereAnyAttrInTheItemsList(arJoItem: string[][]): boolean {
		const anItemWithAttr = arJoItem.find((anItem: string[]): boolean => {
			const thereIsInThis = JsonUtil.isThereAnyAttrInTheItem(anItem)
			return thereIsInThis
		})
		return anItemWithAttr != undefined
	}

	public static isThereAnyAttrInTheItem(joItem: string[]): boolean {
		return joItem.length > 0
	}

	public static removeParams(joParam: any, ...arNmKey: string[]): any {
		const joParamCopy = GeneralUtil.copy(joParam)
		arNmKey.forEach((nmKey: string) => {
			delete joParamCopy[nmKey]
		})
		return joParamCopy
	}

	public static joHNJsonValid(obValue: any): boolean {
		let z = true
		try {
			const a = obValue instanceof Object
			const b = !(obValue instanceof Array)
			z = a
		} catch (e) {
			return false;
		}
		return z;
	}
}
