import { should, expect } from "chai";
import { describe } from "mocha";
import { StringUtil } from "../../EntryPoint";

export class StringUtilTest {
    public static test() {
        describe("StringUtil", () => {
            it("stringfyAndHideSpecialValues has no uses in app", (done) => {
                StringUtil.stringfyAndHideSpecialValues({})
                done();
            });
            
            it("should return correct object transformation on jsonToQueryString", (done) => {
                const obj = {
                    "a":2,
                    "b":3
                }
                should().equal(StringUtil.jsonToQueryString(obj), "?a=2&b=3")
                done();
            });
            
            it("expect toArrayString to merge strings", (done) => {
                const result = StringUtil.toArrayString(['string1', 'string2'], 'string3', 'string4')
                should().equal(result, "string3string1string4string3string2string4")
                done();
            });
            
            it("expect StringUtil to result boolean for string", (done) => {
                const result = StringUtil.isString('STRING')
                should().equal(result, true)
                done();
            });
             
            it("expect isStringOrInteger to result boolean for string or int", (done) => {
                const result = StringUtil.isStringOrInteger('STRING')
                const result2 = StringUtil.isStringOrInteger(2)
                should().equal(result, true)
                should().equal(result2, true)
                done();
            });
            
            it("should isStringNoSpaces say if strings has blank spaces", (done) => {
                const result = StringUtil.isStringNoSpaces('STR ING')
                const result2 = StringUtil.isStringNoSpaces('STRING')
                should().equal(result, false)
                should().equal(result2, true)
                done();
            });
            
            it("expect isChar to result boolean if is a single character", (done) => {
                const result = StringUtil.isChar('STR ING')
                const result2 = StringUtil.isChar('a')
                should().equal(result, false)
                should().equal(result2, true)
                done();
            });
            
            it("expect isEmail to tell if text is in email format", (done) => {
                const result = StringUtil.isEmail('STR ING')
                const result2 = StringUtil.isEmail('juliano@salesfy.com.br')
                should().equal(result, false)
                should().equal(result2, true)
                done();
            });

            it("expect isLink to tell if text is a link format", (done) => {
                const result = StringUtil.isLink('STR ING')
                const result2 = StringUtil.isLink('www.google.com')
                should().equal(result, true)
                should().equal(result2, true)
                done();
            });

            it("expect isUnixFolder to tell if text is a link format", (done) => {
                StringUtil.isUnixFolder('STR ING')
                StringUtil.isUnixFolder({})
                done();
            });

            it("expect isNumberFormatted to tell if text is in a number format", (done) => {
                const result = StringUtil.isNumberFormatted({})
                const result2 = StringUtil.isNumberFormatted(2)
                should().equal(result, false)
                should().equal(result2, true)
                done();
            });

            it("expect isCrypted to tell if text is in crypted format", (done) => {
                const result = StringUtil.isCrypted('$2STRING')
                const result2 = StringUtil.isCrypted('{STRING}')
                should().equal(result, true)
                should().equal(result2, false)
                done();
            });

            it("expect addLeftZero to tell if text is in less than 1 character and add a 0 in front", (done) => {
                StringUtil.addLeftZero('ss')
                StringUtil.addLeftZero('sss')
                done();
            });


            it("expect addRightLetters to tell if text is in certain length and merge with another string in the right", (done) => {
                StringUtil.addRightLetters('STRINNGGGGG')
                StringUtil.addRightLetters('STRING')
                done();
            });

            it("expect addLeftLetters to tell if text is in certain length and merge with another string in the left", (done) => {
                StringUtil.addLeftLetters('STRINNGGGGG', 2)
                StringUtil.addLeftLetters('STRING', 2)
                done();
            });

            it("expect removeExtraSpaces to remove all extra spaces", (done) => {
                const result = StringUtil.removeExtraSpaces('STRINNGGGGG    ')
                const result2 = StringUtil.removeExtraSpaces('STRING   ')
                should().equal(result, "STRINNGGGGG ")
                should().equal(result2, "STRING ")
                done();
            });

            it("dsFixLength", (done) => {
                StringUtil.dsFixLength('STRING', 5)
                done();
            });

            it("expect compareVersions to compare and bring diference of lengths", (done) => {
                const result = StringUtil.compareVersions('STRING', "STRINGDIFF")
                should().equal(result, 0)
                done();
            });

            it("expect isVersionBetween", (done) => {
                const result = StringUtil.isVersionBetween('$version1', "$version10", "$version1")
                should().equal(result, true)
                done();
            });

            it("expect startsWithAny to result boolean for starting with such string", (done) => {
                const result = StringUtil.startsWithAny('nmVersion1', ['an', 'nm'])
                should().equal(result, true)
                const result2 = StringUtil.startsWithAny('nmVersion1', ['an', 'aaa'])
                should().equal(result2, false)
                done();
            });

            it("expect genFileName to bring the new name for the file using dates and user id", (done) => {
                const result = StringUtil.genFileName('-1', 'jpg')
                done();
            });

            it("expect maybePutHttpPrefix to result the link with http", (done) => {
                const result = StringUtil.maybePutHttpPrefix('www.google.com')
                should().equal(result, "http://www.google.com")
                done();
            });

            it("expect csLkCleaner split and merge strings by spaces", (done) => {
                const result = StringUtil.csLkCleaner("'teste', 'teste2', 'teste3'")
                should().equal(result, "'teste','teste2','teste3'")
                done();
            });

            it("expect arLkCleaner to clean string removing spaces", (done) => {
                const result = StringUtil.arLkCleaner(['a','b', 'c ', 'd'])
                done();
            });

        });
    }
}
