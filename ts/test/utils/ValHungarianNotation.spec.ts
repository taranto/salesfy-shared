import { GeneralUtil, StringUtil, ValHN, CtChannelView } from "../../EntryPoint";

export default class ValHungarianNotationSpec {

	public static test() {
		describe(`Hungarian notation`, ()=>{
			ValHungarianNotationSpec.testValTypeValidation()
		})
	}

	private static testValTypeValidation() {
		describe(`Test validation of integers`, () => {
			const arTpPrefix = ["cd", "id", "nr", "qt", "mi"]
			const arObInvalid = ["1a", "a1a", "a1", "a", "", null, undefined, true, false, new Date(), { a:1 },
				CtChannelView.widescreen ]
			const arObValid = [1, "1"]
			ValHungarianNotationSpec.validateAll(arTpPrefix, arObValid, arObInvalid)
		})

		describe(`Test validation of strings`, () => {
			const arTpPrefix = ["nm", "ds", "un", "pi"]
			const arObInvalid = [1, new Date(), null, undefined, true, false, { a:1 }, CtChannelView.widescreen]
			const arObValid = ["1a", "a1a", "a1", "a", "$", "_+!@#(%", "oioioioi@ooiooi.com", ""]
			ValHungarianNotationSpec.validateAll(arTpPrefix, arObValid, arObInvalid)
		})

		describe(`Test validation of date`, () => {
			const arTpPrefix = ["hr", "dh", "dt"]
			const arObInvalid = ["1a", "a1a", "a1", "a", "$", "_+!@#(%", "oioioioi@ooiooi.com", "", null, undefined, true,
				false,  { a:1 }, CtChannelView.widescreen]
			const arObValid = [1, 123123, "1", "123123",
				new Date(), new Date(1), new Date(1, 2), new Date(1, 2, 3), new Date(1, 2, 3, 4), new Date(1, 2, 3, 4, 5)]
			ValHungarianNotationSpec.validateAll(arTpPrefix, arObValid, arObInvalid)
		})

		describe(`Test validation of boolean`, () => {
			const arTpPrefix = ["is", "has", "sh", "ac", "re", "us", "can", "on", "sb", "was"]
			const arObInvalid = ["1a", "a1a", "a1", "a", "", null, undefined, new Date(), { a:1 }, CtChannelView.widescreen]
			const arObValid = [true, "true", false, "false"]
			ValHungarianNotationSpec.validateAll(arTpPrefix, arObValid, arObInvalid)
		})

		describe(`Test validation of encrypted`, () => {
			const arTpPrefix = ["cr"]
			const arObInvalid = ["1a", "a1a", "a1", "a", "", null, undefined, true, false, 1, new Date(), "a$", "1$",
				{ a:1 }, CtChannelView.widescreen]
			const arObValid = ["$1", "$a", "$"]
			ValHungarianNotationSpec.validateAll(arTpPrefix, arObValid, arObInvalid)
		})

		describe(`Test validation of a char`, () => {
			const arTpPrefix = ["lt"]
			const arObInvalid = ["1a", "a1a", "a1", "", null, undefined, true, false, 1, new Date(), "a$", "1$",
				{ a:1 }, CtChannelView.widescreen]
			const arObValid = ["1", "a", "$"]
			ValHungarianNotationSpec.validateAll(arTpPrefix, arObValid, arObInvalid)
		})

		describe(`Test validation of a email`, () => {
			const arTpPrefix = ["em"]
			const arObInvalid = ["1a", "a1a", "a1", "", null, undefined, true, false, 1, new Date(), "a$", "1$", "1", 1, "a",
				"$", "aa,aa@aa.com", "aaaa@aaaa@aaaa.com", "", "aaaa.aaaa", "aaaa@aaaa", "apadl4rl@apadl4rl.apadl4rl", { a:1 },
					CtChannelView.widescreen]
			const arObValid = ["aaaa@aaaa.com", "aaaa@aaaa.com.br"]
			ValHungarianNotationSpec.validateAll(arTpPrefix, arObValid, arObInvalid)
		})

		describe(`Test validation of string numbers formatted`, () => {
			const arTpPrefix = ["sn"]
			const arObInvalid = ["1a", "a1a", "a1", "a", "$", new Date(), { a:1 }, CtChannelView.widescreen,
				null, undefined, true, false, "", "_+!@#(%", "oioioioi@ooiooi.com"]
			const arObValid = [1, "1", " 1", "1 ", " 1 ", "1 1", " 1 1 ", "_+!@#(%1", "1_+!@#(%", "_+!@1#(%", "111@111", "1.1.1"]
			ValHungarianNotationSpec.validateAll(arTpPrefix, arObValid, arObInvalid)
		})

		describe(`Test validation of a weblink`, () => {
			const arTpPrefix = ["lk"]
			const arObInvalid = ["1", "a", "$", "1a", "a1a", "a1", "", null, undefined, true, false, 1, new Date(), "a$", "1$",
				{ a:1 }, CtChannelView.widescreen]
			const arObValid = ["http://google.com", "www.google.com",
				"https://google.com", "https://google.com.br"]
			ValHungarianNotationSpec.validateAll(arTpPrefix, arObValid, arObInvalid)
		})

		// describe(`Test validation of a picture`, () => {
		// 	const arTpPrefix = ["pi"]
		// 	const arObInvalid = ["1", "a", "$", "1a", "a1a", "a1", "", null, undefined, true, false, 1, new Date(), "a$", "1$",
		// 		"http://google.com", "www.google.com", "https://google.com", "https://google.com.br", "/a/b/c", "/a/b/c/",
		// 		{ a:1 }, CtChannelView.widescreen]
		// 	const arObValid = ["www.google.com/pic/a.bmp", "www.google.com/pic/a.jpg", "www.google.com/pic/a.jpeg",
		// 		"www.google.com/pic/a.gif", "www.google.com/pic/a.png", "/a/b/c.jpg", "/a/b/c.jpeg", 
		// 		"aaa.bmp", "AAA.BMP", "1.BMP", "1.2.3:4/5\\6|7.BMP"]
		// 	ValHungarianNotationSpec.validateAll(arTpPrefix, arObValid, arObInvalid)
		// })

		// describe(`Test validation of a lk`, () => {
		// 	const arTpPrefix = ["lk"]
		// 	const arObInvalid = ["", null, undefined, true, false, 1, new Date(), { a:1 }, CtChannelView.widescreen, "a a"]
		// 	const arObValid = ["www.google.com/pic/a.bmp", "www.google.com/pic/a.jpg", "www.google.com/pic/a.jpeg",
		// 		"www.google.com/pic/a.gif", "www.google.com/pic/a.png", "/a/b/c.jpg", "/a/b/c.jpeg", "http://google.com",
		// 		"www.google.com", "https://google.com", "https://google.com.br", "/a/b/c", "/a/b/c/", "a$", "1$", "1", "a",
		// 		"$", "1a", "a1a", "a1", "aaa.bmp", "AAA.BMP", "1.BMP", "1.2.3:4/5\\6|7.BMP"]
		// 	ValHungarianNotationSpec.validateAll(arTpPrefix, arObValid, arObInvalid)
		// })

		describe(`Test validation of an unix folder`, () => {
			const arTpPrefix = ["fi"]
			const arObInvalid = ["1", "a", "$", "1a", "a1a", "a1", "", null, undefined, true, false, 1, new Date(), "a$", "1$",
				"http://google.com", "www.google.com", "https://google.com", "https://google.com.br", "www.google.com/pic/a.bmp",
				"www.google.com/pic/a.jpg", "www.google.com/pic/a.jpeg", "www.google.com/pic/a.gif",
				"www.google.com/pic/a.png", "../a/b/c/", { a:1 }, CtChannelView.widescreen]
				//TODO avaliar se '../' valeria. por enquanto nao.
			const arObValid = ["/a/b/c", "/a/b/c/", "/a/b/c/d.mp3"]
			ValHungarianNotationSpec.validateAll(arTpPrefix, arObValid, arObInvalid)
		})

		describe(`Test validation jsons`, () => {
			const arTpPrefix = ["jo", "ct"]
			const arObInvalid = ["1", "a", "$", "1a", "a1a", "a1", "", null, undefined, true, false, 1, "a$", "1$",
				"http://google.com", "www.google.com", "https://google.com", "https://google.com.br", "www.google.com/pic/a.bmp",
				"www.google.com/pic/a.jpg", "www.google.com/pic/a.jpeg", "www.google.com/pic/a.gif",
				"www.google.com/pic/a.png", "../a/b/c/", "/a/b/c", "/a/b/c/", "/a/b/c/d.mp3"]
			const arObValid = [{ a:1 }, CtChannelView.widescreen, new Date()]
			ValHungarianNotationSpec.validateAll(arTpPrefix, arObValid, arObInvalid)
		})

		describe(`Test validation of arrays(id)`, () => {
			const arTpPrefix = ["arIdSomething"]
			const arObInvalid = ["1a", "a1a", "a1", "a", "", null, undefined, true, false, new Date(), "1", "[1,2,3,4]",
				[1, new Date()], { a:1 }, CtChannelView.widescreen, [{ a:1 }], [CtChannelView.widescreen]]
			const arObValid = [[1, 2, 3, 4], ["1", "2", "3", "4"]]
			ValHungarianNotationSpec.validateAll(arTpPrefix, arObValid, arObInvalid)
		})

		describe(`Test validation of arrays(nm)`, () => {
			const arTpPrefix = ["arNmSomething"]
			const arObInvalid = ["1a", "a1a", "a1", "a", "", null, undefined, true, false, new Date(), "1", "[1,2,3,4]",
				[1, 2, 3, 4], ["1", "2", new Date()], { a:1 }, CtChannelView.widescreen, [{ a:1 }], [CtChannelView.widescreen]]
			const arObValid = [["1", "2", "3"], ["1a", "a2a", "a3"], ["a", "b", "c"],]
			ValHungarianNotationSpec.validateAll(arTpPrefix, arObValid, arObInvalid)
		})

		describe(`Test validation of arrays(jo)`, () => {
			const arTpPrefix = ["arJoSomething"]
			const arObInvalid = [[1, 2, 3, 4], ["1", "2", "3", "4"], "1a", "a1a", "a1", "a", "", null, undefined, true, false,
				new Date(), "1", "[1,2,3,4]", [1, new Date()], { a:1 }, CtChannelView.widescreen, "'{a:1}'", "{a:1}"]
			const arObValid = [[{ a:1 }], [CtChannelView.widescreen]]
			ValHungarianNotationSpec.validateAll(arTpPrefix, arObValid, arObInvalid)
		})

		describe(`Test INvalidation of unindexed value`, () => {
			const arTpPrefix = ["aaaaa", "aAaAaA", "AaAa"]
			const arObInvalid = [1, "A", new Date(), true, ["a", 1, new Date(), true]]
			const arObValid : any = []
			ValHungarianNotationSpec.validateAll(arTpPrefix, arObValid, arObInvalid)
		})

		describe("Test some other methods", ()=> {
			it("ValHN.getInvalidParams", (done)=> {
				const joParamWrong1 = { idCtUserGroupAccess : "" }
				const joParamWrong2 = { idCtUserGroupAccess : undefined }
				const joParamWrong3 = { idCtUserGroupAccess : null }
				const arNmInvalid1 = ValHN.getInvalidParams(joParamWrong1, false)
				const arNmInvalid1AcEmpty = ValHN.getInvalidParams(joParamWrong1, true)
				const arNmInvalid2 = ValHN.getInvalidParams(joParamWrong2, false)
				const arNmInvalid2AcEmpty = ValHN.getInvalidParams(joParamWrong2, true)
				const arNmInvalid3 = ValHN.getInvalidParams(joParamWrong2, false)
				const arNmInvalid3AcEmpty = ValHN.getInvalidParams(joParamWrong2, true)
				const isUnderExpectation =
				arNmInvalid1.length == 1 || arNmInvalid1AcEmpty.length == 1 ||
				arNmInvalid2.length == 1 || arNmInvalid2AcEmpty.length == 0 ||
				arNmInvalid3.length == 1 || arNmInvalid3AcEmpty.length == 0
				if (!isUnderExpectation) {
					done(`Wrong quantity of invalid params`)
				} else {
					done()
				}
			})
		})
	}

	public static validateAll(nmKeys: string[], vlKeysValid: any[], vlKeysInvalid: any[]) {
		ValHungarianNotationSpec.validateAllData(nmKeys, vlKeysValid, true)
		ValHungarianNotationSpec.validateAllData(nmKeys, vlKeysInvalid, false)
	}

	public static validateAllData(nmKeys: string[], vlKeys: any[], shBeValid: boolean) {
		vlKeys.forEach(vlKey => {
			ValHungarianNotationSpec.validateAllHN(nmKeys, vlKey, shBeValid)
		})
	}

	public static validateAllHN(nmKeys: string[], vlKey: any, shBeValid: boolean) {
		nmKeys.forEach(nmKey => {
			ValHungarianNotationSpec.validate(nmKey, vlKey, shBeValid)
		})
	}

	private static validate(nmKey: string, vlKey: any, shBeValid: boolean) {
		const dsValid = shBeValid ? "VALID" : "INVALID"
		it(`It should say that keys starting with '${nmKey}' valued '${vlKey}' are ${dsValid}`, (done) => {
			const isValid = ValHN.valNmKey(nmKey, vlKey)
			if (isValid == shBeValid) {
				done()
			} else {
				done(`Value should've been considered ${dsValid}`)
			}
		})
	}
}
