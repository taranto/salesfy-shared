export default class BooleanUtil {

	public static isBooleanPureOrString(obValue: any): boolean {
		return ((obValue + "") == "true" || (obValue + "") == "false")
	}

	public static isAllValidBooleans(joParam: any, arNmKeyTrue: string[], arNmKeyFalse: string[]): boolean {
		let isAllValid = true
		arNmKeyTrue.forEach(nmKeyTrue => {
			isAllValid = isAllValid && joParam[nmKeyTrue]
		})
		arNmKeyFalse.forEach(nmKeyFalse => {
			isAllValid = isAllValid && !joParam[nmKeyFalse]
		})
		return isAllValid
	}
}
