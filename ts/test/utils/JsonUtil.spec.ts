
import { should, expect } from "chai";
import { describe } from "mocha";
import { JsonUtil } from "../../EntryPoint";

export class JsonUtilTest {

    public static test() {
        describe("Json Util", () => {
            it("method getArNmKeyMissingInJoParam should bring missing parameters", (done) => {
                //happy test
                const obj1 = { 'prop1': 'val1', 'prop2': 'val2', 'prop3': 'val3' }
                const obj2 = ['prop4', 'prop1']
                // verify if keys in obj2 has in obj1
                const result = JsonUtil.getArNmKeyMissingInJoParam(obj1, ...obj2)
                expect(result).to.be.eql(['prop4'])
                done();
            });

            it("getArNmKeyMissingInArJoParam should bring array of missing parameters for each objct", (done) => {
                const dummyObj =
                    [{
                        prop1OfObj1: 'value 1 of Obj 1',
                        prop2OfObj1: 'value 2 of Obj 1',
                        prop3OfObj1: 'value 3 of Obj 1'
                    },
                    {
                        prop1OfObj2: 'value 1 of Obj 2',
                        prop2OfObj2: 'value 2 of Obj 2',
                        prop3OfObj2: 'value 3 of Obj 2'
                    },
                    {
                        prop1OfObj3: 'value 1 of Obj 3',
                        prop2OfObj3: 'value 2 of Obj 3',
                        prop3OfObj3: 'value 3 of Obj 3'
                    }]

                const testArStr = ['missingParam', 'prop2OfObj1']

                const answer = [['missingParam'],
                ['missingParam', 'prop2OfObj1'],
                ['missingParam', 'prop2OfObj1']]

                expect(JsonUtil.getArNmKeyMissingInArJoParam(dummyObj, ...testArStr)).to.be.eql(answer)
                done()
            })

            it("should returned one object for all props that match particular string in array", (done) => {
                const testArJo: { [key: string]: string } = {
                    'prop1': 'value1',
                    'prop2': 'value2',
                    'prop3': 'value3'
                }
                const testArStr: string[] = [
                    'prop1', 'prop2'
                ]
                const answer = { 'prop1': 'value1', 'prop2': 'value2' }
                const result = JsonUtil.filterJoKeys(testArJo, ...testArStr)
                expect(result).to.be.eql(answer)
                done()
            })

            it("expect isJoEmpty method to result boolean for object that has own properties", (done) => {
                const obj = {
                    param1: "value1",
                    param2: "value2"
                }
                const result = JsonUtil.isJoEmpty(obj)
                should().equal(result, false)
                done()
            })

            it("expect mergeJoPerKey method to merge keys of an object", (done) => {
                const obj1 = [
                    { p1: 1, p2: 2, p3: 3 },
                    { p4: 4, p5: 5, p6: 6 }
                ]
                const obj2 = [
                    { p7: 1, p8: 2, p9: 3 },
                    { p10: 4, p11: 5, p12: 6 }
                ]
                const answer = [{ p1: 1, p2: 2, p3: 3 },
                { p10: 4, p11: 5, p12: 6, p4: 4, p5: 5, p6: 6, isMerged: false }]
                const result = JsonUtil.mergeJoPerKey('p1', obj1, obj2)
                expect(result).to.be.eql(answer)
                done()
            })

            it("expect mergeToAll method to merge two diferent objs", (done) => {
                const obj1 = [
                    { p1: 1, p2: 2, p3: 3 },
                    { p4: 4, p5: 5, p6: 6 }
                ]
                const obj2 = [
                    { p7: 1, p8: 2, p9: 3 },
                    { p10: 4, p11: 5, p12: 6 }
                ]
                const answer = [{
                    '0': { p7: 1, p8: 2, p9: 3 },
                    '1': { p10: 4, p11: 5, p12: 6 }, p1: 1, p2: 2, p3: 3
                },
                { '0': { p7: 1, p8: 2, p9: 3 }, '1': { p10: 4, p11: 5, p12: 6 }, p4: 4, p5: 5, p6: 6 }]

                const result = JsonUtil.mergeToAll(obj1, obj2)
                expect(result).to.be.eql(answer)
                done()
            })

            it("expect isSameArJo verify if two arrays of objects are the same", (done) => {
                const obj1 = [
                    { p1: 1, p2: 2, p3: 3 },
                    { p4: 4, p5: 5, p6: 6 }
                ]
                const obj2 = [
                    { p7: 124, p8: 124, p9: 23 },
                    { p10: 4123, p11: 315, p12: 126 }
                ]
                const obj3 = [
                    { p7: 124, p8: 124, p9: 23 },
                    { p10: 4123, p11: 315, p12: 126 }
                ]
                const result = JsonUtil.isSameArJo(obj1, obj2)
                const result2 = JsonUtil.isSameArJo(obj3, obj2)
                should().equal(result, false)
                should().equal(result2, true)
                done()
            })

            it("expect isSameJo verify if two objects are the same", (done) => {
                const obj1 = [
                    { p1: 1, p2: 2, p3: 3 },
                    { p4: 4, p5: 5, p6: 6 }
                ]
                const obj2 = [
                    { p7: 124, p8: 124, p9: 23 },
                    { p10: 4123, p11: 315, p12: 126 }
                ]
                const obj3 = [
                    { p7: 124, p8: 124, p9: 23 },
                    { p10: 4123, p11: 315, p12: 126 }
                ]
                const result = JsonUtil.isSameArJo(obj1, obj2)
                const result2 = JsonUtil.isSameArJo(obj3, obj2)
                should().equal(result, false)
                should().equal(result2, true)
                done()
            })

            it("expect isFilterWorking result boolean for intern filter is working", (done) => {
                const obj1 = [
                    { p1: 1, p2: 2, p3: 3 },
                    { p4: 4, p5: 5, p6: 6 }
                ]
                const obj2 = [
                    'p1', 'p2', 'p3', 'p4', 'p5', 'p6'
                ]
                const result = JsonUtil.isFilterWorking(obj1, obj2, 'p1')
                should().equal(result, false)
                done()
            })

            it.skip("isWordFoundInKeys should return word found in keys in a object at another object", (done) => {
                const obj1 = { p1: 1, p2: 2, p3: 3 }
                const obj2 = ['p1', 'p2', 'p3']
                const result = JsonUtil.isFilterWorking(obj1, obj2, ['p1', 'p2'])
                should().equal(result, true)
                done()
            })

            it("name isWordFoundInKey should return boolean for find a word in object keys ", (done) => {
                const obj1 = { p1: 1, p2: 2, p3: 3 }
                const obj2 = ['p1', 'p2', 'p3']
                const result = JsonUtil.isWordFoundInKey(obj1, obj2, 'p1')
                should().equal(result, false)
                done()
            })

            it("name getMissingParamsEach to bring a array of arrays of missing params", (done) => {
                const obj1 = [
                    { p1: 1, p2: 2, p3: 3 },
                    { p4: 4, p5: 5, p6: 6 }
                ]
                const obj2 = ['p1', 'p2', 'p6']
                const answer = [['p6'], ['p1', 'p2']]
                const result = JsonUtil.getMissingParamsEach(obj1, obj2)
                expect(result).to.be.eql(answer)
                done()
            })

            it("name getMissingParams to bring a array of missing params", (done) => {
                const obj1 = { p1: 1 }
                const obj2 = ['p1', 'p2']
                const result = JsonUtil.getMissingParams(obj1, obj2)
                expect(result).to.be.eql(['p2'])
                done()
            })

            it("name getExtraParams to bring a array of missing params", (done) => {
                const obj1 = { p1: 1, p2: 2, p3: 3 }
                const obj2 = ['p1', 'p2']
                const result = JsonUtil.getExtraParams(obj1, obj2)
                expect(result).to.be.eql(['p3'])
                done()
            })

            it("name isThereAnyAttrInTheItemsList return boolean for valid array of arrays", (done) => {
                const obj1 = [
                    ['1', '2', '3'],
                    ['4', '5', '6']
                ]
                const obj2 = [
                    ['1', '2', '3'],
                    ['lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll']
                ]
                const result = JsonUtil.isThereAnyAttrInTheItemsList(obj1)
                const result2 = JsonUtil.isThereAnyAttrInTheItemsList(obj2)
                expect(result).to.be.eql(true)
                expect(result2).to.be.eql(true)
                done()
            })

            it("name isThereAnyAttrInTheItem result booleans for valid array of itens", (done) => {
                const obj1 = ['1', '2', '3']
                const result = JsonUtil.isThereAnyAttrInTheItem(obj1)
                expect(result).to.be.eql(true)
                done()
            })

            it("name removeParams expect to remove params", (done) => {
                const obj2 = {
                    '1': 1,
                    '2': 2,
                    '3': 3,
                    '4': 4
                }
                const obj1 = ['1', '2', '3']
                const result = JsonUtil.removeParams(obj2, ...obj1)
                expect(result).to.be.eql({ '4': 4 })
                done()
            })

            it("name joHNJsonValid expect to remove params", (done) => {
                const obj2 = {
                    '1': 1,
                    '2': 2,
                    '3': 3,
                    '4': 4
                }
                const result = JsonUtil.joHNJsonValid(obj2)
                expect(result).to.be.eql(true)
                done()
            })
        })
    }
}
