import { should } from "chai";
import { describe } from "mocha";
import { ValJoiUtil, KeyEnum } from "../../EntryPoint";
import { join } from "path";
import * as Joi from 'joi'

export default class AttributesSpec {

	public static test() {
		describe.skip("Testing common attributes @data", () => {
			AttributesSpec.testEmail()
			AttributesSpec.testTelephone()
			AttributesSpec.testWeblink()
			AttributesSpec.testName()
			AttributesSpec.testPassword()
		});
	}

	private static testPassword() {
		const scPassword = ValJoiUtil.joiStringSchemaPassword();
		const dsValidPw = ["12345678", "abcdefgh", "!@#$%^&*a", "àáäâãçÁÀÄÂÃ", "123456789012345678901234567890"];
		const dsInvalidPw = ["1234567", "1234567890123456789012345678901", "1234 5678", "abcd efgh", ""];
		const expectedErrorKey = KeyEnum.nmKeyValFormatLenght
		AttributesSpec.validateAtr("Password", dsValidPw, dsInvalidPw, scPassword, expectedErrorKey)
	}

	private static testTelephone() {
		const scTel = ValJoiUtil.joiStringSchemaTelephone();
		const dsValidTels = ["554899990000", "123456789", "1234567890123"];
		const dsInvalidTels = ["a123456789", "1234 56789", "12345678901234", "12345-6789", "12345678", ""];
		const expectedErrorKey = KeyEnum.nmKeyValFormatNumbers
		AttributesSpec.validateAtr("Telephone", dsValidTels, dsInvalidTels, scTel, expectedErrorKey)
	}

	private static testEmail() {
		const scEmail = ValJoiUtil.joiStringSchemaEmail();
		const dsValidEmails = ["aaaa@aaaa.com", "aaaa@aaaa.com.br"];
		const dsInvalidEmails = ["aaaa@aaaa@aaaa.com", "", "aaaa.aaaa", "aaaa@aaaa"];
		const expectedErrorKey = KeyEnum.valEmail
		AttributesSpec.validateAtr("Emails", dsValidEmails, dsInvalidEmails, scEmail, expectedErrorKey)
	}

	private static testWeblink() {
		const scWeblink = ValJoiUtil.joiStringSchemaWeblink();
		const dsValidWeblinks = ["http://aaaa.com.br", "https://aaaa.com.br",
			"www.aaaa.com.br", "http://aaaa.com", "https://aaaa.com", "www.aaaa.com",
			"www.aaaa", "http://aaaa", "https://aaaa"];
		const dsInvalidWeblinks = ["", "aaaa.com", "aaaa.com.br"];
		const expectedErrorKey = KeyEnum.valWeblink
		AttributesSpec.validateAtr("Weblinks", dsValidWeblinks, dsInvalidWeblinks, scWeblink, expectedErrorKey)
	}

	private static testName() {
		const scName = ValJoiUtil.joiStringSchemaName();
		const dsValidNames = ["abc", "abcdefghi abcdefghi abcdefghi abcdefghi abcdefghi abcdefghi ", "ááá"];
		const dsInvalidNames = ["", "a", "ab", "abcdefghi abcdefghi abcdefghi abcdefghi abcdefghi abcdefghi a"];
		const expectedErrorKey = KeyEnum.nmKeyValFormatCharacters
		AttributesSpec.validateAtr("Names", dsValidNames, dsInvalidNames, scName, expectedErrorKey)
	}

	private static validateAtr(dsAtr : string, dsValidAtrs : any[], dsInvalidAtrs : any[],
		joiSchema : Joi.AnySchema, expectedErrorKey:string) {
		describe(`Validate ${dsAtr}`, () => {
			AttributesSpec.validateAnAttribute(dsValidAtrs, joiSchema);
		});
		describe(`Invalidate ${dsAtr}`, () => {
			AttributesSpec.invalidateAnAttribute(dsInvalidAtrs, joiSchema, expectedErrorKey);
		});
	}

	public static validateAnAttribute(atValues : any[], joiSchema : Joi.AnySchema) {
		atValues.forEach(atValue => {
			it(atValue, (done) => {
				const theError = Joi.validate(atValue, joiSchema).error
				should().equal(theError, null);
				done();
			});
		});
	}

	public static invalidateAnAttribute(atValues : any[], joiSchema : Joi.AnySchema, expectedErrorKey:string) {
		atValues.forEach(atValue => {
			it(atValue, (done) => {
				const theError = Joi.validate(atValue, joiSchema).error.message
				should().equal(theError, expectedErrorKey);
				done();
			});
		});
	}
}
