import GeneralUtil from "./GeneralUtil";
import * as qs from 'qs'
import { RegExpConst, TDate, DateUtil, NumberUtil } from "../../EntryPoint";

export default class StringUtil {

	public static random(): string {
		const nmString = Math.random().toString(36).substring(2, 10)
		if (StringUtil.isString(nmString)) {
			return nmString
		}
		return StringUtil.random()
	}

	// has no uses
	public static stringfyAndHideSpecialValues(joParam: any) {
		const joParam2 = GeneralUtil.copy(joParam)
		for (const nmKey in joParam2) {
			if (joParam2[nmKey]) {
				if (nmKey.startsWith("pw")) {
					joParam2[nmKey] = "???"
				}
				if (nmKey.startsWith("cr")) {
					joParam2[nmKey] = "???"
				}
				if (nmKey.startsWith("un")) {
					joParam2[nmKey] = "???"
				}
				if (nmKey == ("dsToken")) {
					joParam2[nmKey] = "???"
				}
			}
		}
		return JSON.stringify(joParam2)
	}

	public static jsonToQueryString(joParam: any) {
		const stringifyOptions: any = { encodeValuesOnly: true, encode: true, addQueryPrefix: true, arrayFormat: "indices" }
		const queryString = qs.stringify(joParam, stringifyOptions)
		// const decodedQueryString = encodeURIComponent(queryString)
		return queryString
	}

	// has no uses
	public static toArrayString(dsStrings : string[], dsStringPrefix : string, dsStringSuffix : string) {
		let dsStringfied = ""
		dsStrings.forEach(dsString => {
			dsStringfied = `${dsStringfied}${dsStringPrefix}${dsString}${dsStringSuffix}`
		})
		return dsStringfied
	}

	public static isString(obValue : any) : boolean {
		return typeof obValue === "string"
	}

	public static isStringOrInteger(obValue : any) : boolean {
		return typeof obValue === "string" || NumberUtil.isInteger(obValue)
	}

	public static isStringNoSpaces(obValue : any) : boolean {
		const isString = typeof obValue === "string"
		if (!isString) { return false }
		const hasSpace = obValue.toString().indexOf(" ") != -1
		if (hasSpace) { return false }
		const isEmpty = obValue.toString() == ""
		if (isEmpty) { return false }
		return true
	}

	public static isChar(obValue : any) : boolean {
		return StringUtil.isString(obValue) && (obValue+"").length==1
	}

	public static isEmail(obValue : any) : boolean {
		return RegExpConst.EMAIL.test(obValue)
	}

	public static isLink(obValue : any) : boolean {
		const isString = StringUtil.isString(obValue)
		const isMinimumLinkSize = (obValue+"").length > 5
		return isString && isMinimumLinkSize
	}

	public static isUnixFolder(obValue : any) : boolean {
		return RegExpConst.UNIX_FOLDER.test(obValue)
	}

	public static isNumberFormatted(obValue : any) : boolean {
		return RegExpConst.NUMBER_FORMATTED.test(obValue)
	}

	public static isCrypted(obValue:any) : boolean {
		if (!StringUtil.isString(obValue)) {
			return false
		}
		if (!(obValue+"").startsWith("$")) {
			return false
		}
		return true
	}

	public static isPicture(obValue:any) : boolean {
		const nmExtensionsAllowed = ["jpg", "jpeg", "bmp", "gif", "png"]
		const nmExtensionAllowed = nmExtensionsAllowed.find(nmExtension => {
			return (obValue+"").toLocaleLowerCase().trim().endsWith("."+nmExtension)
		})
		const isObValueAPicture = nmExtensionAllowed!=undefined
		return isObValueAPicture
	}

	public static addLeftZero(n: string, qtLength = 2): string {
		if ((n + "").length >= qtLength) {
			return n
		}
		if ((n + "").length < qtLength - 1) {
			return StringUtil.addLeftZero("0" + n, qtLength)
		}
		return "0" + n
	}

	public static addRightLetters(dsWord: string, qtLength:number = 10, ltFillWith = " "): string {
		if ((dsWord + "").length >= qtLength) {
			return dsWord
		}
		if ((dsWord + "").length < qtLength - 1) {
			return StringUtil.addRightLetters(dsWord + ltFillWith, qtLength, ltFillWith)
		}
		return dsWord + ltFillWith
	}

	public static addLeftLetters(dsWord: string, qtOffset: number, ltFillWith = " "): string {
		if (qtOffset > 0) {
			dsWord = ltFillWith + StringUtil.addLeftLetters(dsWord, --qtOffset, ltFillWith)
		}
		return dsWord
	}

	public static removeExtraSpaces(dsMsg: string): string {
		return dsMsg.replace(/\s\s+/g, ` `)
	}

	public static dsFixLength(
		dsMsg: string | number | undefined, qtLengthMsg: number, shFillRight = false, dsFillWith = " "): string {
		if (!dsMsg) {
			dsMsg = ""
		}
		const qtMsgLength = (dsMsg + "").length
		if (qtMsgLength >= qtLengthMsg) {
			return dsMsg + ""
		}
		if (shFillRight) {
			dsMsg = StringUtil.addRightLetters(dsMsg + "", qtLengthMsg, dsFillWith)
		} else {
			dsMsg = StringUtil.addLeftLetters(dsMsg + "", qtLengthMsg - qtMsgLength, dsFillWith)
		}
		return dsMsg
	}

	public static compareVersions(v1: string, v2: string): number {
		let i
		let diff
		const regExStrip0 = /(\.0+)+$/;
		const segmentsA = v1.replace(regExStrip0, '').split('.');
		const segmentsB = v2.replace(regExStrip0, '').split('.');
		const l = Math.min(segmentsA.length, segmentsB.length);
		for (i = 0; i < l; i++) {
			diff = parseInt(segmentsA[i], 10) - parseInt(segmentsB[i], 10);
			if (diff) {
				return diff;
			}
		}
		return segmentsA.length - segmentsB.length;
	}

	public static isVersionBetween(nrMinVersion: string, nrMaxVersion: string, snVersionTarget: string): boolean {
		const isTargetAboveMin = StringUtil.compareVersions(nrMinVersion, snVersionTarget) <= 0
		const isTargetBelowMax = StringUtil.compareVersions(nrMaxVersion, snVersionTarget) >= 0
		return isTargetAboveMin && isTargetBelowMax
	}

	public static startsWithAny(nmField:string, arNmPrefixes:string[]) : boolean {
		let startsWithAny = false
		arNmPrefixes.forEach((nmPrefix:string) => {
			if (nmField.startsWith(nmPrefix)) {
				startsWithAny = true
			}
		})
		return startsWithAny
	}

	public static genFileName(idUser:"-1", nmFileExtension="") : string {
		let dsDateBeautified = DateUtil.beautify(new Date(), "DateMili")
		dsDateBeautified = dsDateBeautified.replace(/\//g, '-')
		dsDateBeautified = dsDateBeautified.replace(" ", "-")
		dsDateBeautified = idUser + "-" + dsDateBeautified + nmFileExtension
		return dsDateBeautified

		// return `${idUser ? idUser : '-1'}-${new Date().toLocaleString('pt-BR', {
		// 	year: 'numeric',
		// 	month: '2-digit',
		// 	day: '2-digit',
		// 	hour: '2-digit',
		// 	minute: '2-digit',
		// 	second: '2-digit'
		// }).replace(/\//g, '-').replace(" ", "")}.${(nmFileExtension ? nmFileExtension : '').split('.').pop()}`
	}

	public static maybePutHttpPrefix(lkParam: any) : string {
		let lkParamNew = lkParam
		if (!(lkParam.startsWith("http://") || lkParam.startsWith("https://"))) {
			lkParamNew = "http://" + lkParam;
		}
		return lkParamNew;
	}

	public static csLkCleaner(csLkParam : string, rxSplit=/[,\n]/g) : string {
		const arLkParam = csLkParam.split(rxSplit)
		const arLkParamClean = StringUtil.arLkCleaner(arLkParam)
		const csLkClean = arLkParamClean.join(",")
		return csLkClean
	}

	public static arLkCleaner(arLkParam : string[]) : string[] {
		const arLkParamNoSpace = arLkParam.map(lkParam => lkParam.replace(" ","").trim())
		const arLkParamClean = arLkParamNoSpace.filter(lkParam => {
			const isLink = StringUtil.isLink(lkParam)
			return isLink
		})
		return arLkParamClean
	}
}
