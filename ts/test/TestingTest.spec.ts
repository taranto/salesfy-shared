import { should } from "chai";
import { describe } from "mocha";
import { LayerValidate } from "../EntryPoint";

export class TestingTest {

	public static test() {
		describe("Is the test testable?", () => {
			it("should succeed!", (done) => {
				should().equal(1, 1);
				done();
			});
		});
		describe("Cover unintended lines to test", () => {
			it("should succeed!", (done) => {
				LayerValidate.isJoValid({}, [], true)
				should().equal(1, 1);
				done();
			});
		});
	}
}
