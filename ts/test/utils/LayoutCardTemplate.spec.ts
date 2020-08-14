import { should, expect } from "chai";
import { describe } from "mocha";
import { LayoutCardTemplateUtil } from "../../EntryPoint";

import { ICardTemplate, IContentConfig } from '../../app/utils/LayoutCardTemplateUtil';

export class CardLayoutTests {

    public static test() {
        describe("Layout Card Template", () => {
            it("should return template id given the 9 existent templates", (done) => {
                // Mounting all templates that can be inserted inside getCd
                const arMapTemplates = LayoutCardTemplateUtil.getArrTemplate().map((template: ICardTemplate) => {
                    const joContentConfig: IContentConfig = {}

                    template.arrFalse.map((val)=> {
                        joContentConfig[val] = false
                    })
                
                    template.arrTrue.map((val)=>{
                        joContentConfig[val] = true
                    })
                
                    return joContentConfig
                })
                //finish 

                arMapTemplates.map((val,ind) => {
                    const result = LayoutCardTemplateUtil.getCd(val)
                    should().equal(result, ind+1, "it's not the proper template!")
                })

                done();
            });

        });
    }
}
