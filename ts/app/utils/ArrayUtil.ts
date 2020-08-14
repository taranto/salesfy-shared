export default class ArrayUtil {

	public static isArrayOfSameType(obValue:any) : boolean {
		const isArray = Array.isArray(obValue)
		if (!isArray) {
			return false
		}
		const arObValue : any[] = obValue
		if (arObValue.length == 0) {
			return true
		}
		const firstObValue = arObValue[0]
		const firstObValueType = typeof firstObValue
		const arObValueDifferentType = arObValue.filter(anObValue => {
			return typeof anObValue != firstObValueType
		})
		if (arObValueDifferentType.length == 0) {
			return true
		}
		return false
	}

	public static diff(ar1 : any[], ar2 : any[]) : any[] {
		const aDiff = ar1.filter((i)=> {
			return ar2.indexOf(i) < 0
		})
		return aDiff
	}
}
