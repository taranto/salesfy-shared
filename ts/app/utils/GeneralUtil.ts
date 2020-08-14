export default class GeneralUtil {
	public static copy(joParam: any): any {
		return JSON.parse(JSON.stringify(joParam))
	}
	public static intersection(id: string, array1: any[], array2: any[]): any[] {
		return array1.filter((value: any) => {
			const found = array2.find((value2: any) => {
				return value[id] == value2[id]
			})
			return found != null
		})
	}

	public static vlArrayToJoArray(array: any[], nmKey: string) {
		const arrayJoNew: any = []
		array.forEach((vlArray: number) => {
			const joNew: any = {}
			joNew[nmKey] = vlArray
			arrayJoNew.push(joNew)
		})
		return arrayJoNew
	}

	public static distributeAttributeThroughJos(joParam: any, nmKey: string, vlKey: any): any {
		joParam.forEach((aParam: any) => {
			aParam[nmKey] = vlKey
		})
		return joParam
	}

	public static extractArrayValueFromJson(arJson: any[], nmKey: string) {
		return arJson.map(aJson => +aJson[nmKey]);
	}

	public static idDifferenceInArJson(ids: number[], arJson: any[], nmKey: string): number[] { //TODO fazer versão entity
		const vlArray = GeneralUtil.extractArrayValueFromJson(arJson, nmKey)
		const vlArrayDiff = ids.filter((vl: number) => {
			return vlArray.indexOf(vl) < 0;
		});
		return vlArrayDiff
	}

	public static differenceBetweenArrays<T>(arr1: T[], arr2: T[]): T[] {
		return arr1.filter((i) => {
			return arr2.indexOf(i) < 0
		})
	}
}
