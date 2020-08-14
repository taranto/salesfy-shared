import { should, expect } from 'chai';
import { describe } from 'mocha';
import { DateUtil } from '../../EntryPoint';
import * as faker from 'faker';

export class DateUtilTest {
	public static test() {
		describe('Date Util', () => {
			it('should say if the input is a real date or not', (done) => {
				const dateTest = DateUtil.isDate(new Date());
				const dateTest2 = DateUtil.isDate(faker.date.past());
				const dateTest3 = DateUtil.isDate(faker.date.future());
				should().equal(dateTest, true, 'faleid in a new Date() experiment');
				should().equal(dateTest2, true, 'failed with a random date in past');
				should().equal(dateTest3, true, 'failed with a random date in future');

				done();
			});
		});
	}
}
