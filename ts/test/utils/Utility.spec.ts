import { GeneralUtil, StringUtil, JsonUtil } from '../../EntryPoint';
import { should } from 'chai';

export default class UtilitySpec {
	public static test() {
		UtilitySpec.testGeneralUtil();
		UtilitySpec.testStringUtil();
		UtilitySpec.testJsonUtil();
	}

	private static testGeneralUtil() {
		describe(`General Util Test`, () => {
			it('It should copy the json', (done) => {
				const joToCopy = { a: 'a' };
				const joCopied = GeneralUtil.copy(joToCopy);
				if (joCopied.a != joCopied.a) {
					throw new Error('jsons were not the same');
				}
				done();
			});

			it('It should return an intersection of the array values', (done) => {
				const jo1 = { idKey: 'aValue1' };
				const jo2 = { idKey: 'aValue2' };
				const jo3 = { idKey: 'aValue3' };
				const arList1 = [ jo1, jo3 ];
				const arList2 = [ jo2, jo1 ];
				const intersection = GeneralUtil.intersection('idKey', arList1, arList2);
				if (intersection[0] != [ jo1 ][0]) {
					throw new Error('jsons were not the same');
				}
				done();
			});
		});
	}

	private static testStringUtil() {
		describe(`General Util Test`, () => {
			it('It should generate a default parameter random string', (done) => {
				const dsRandom = StringUtil.random();
				const dsRandom2 = StringUtil.random();
				if (dsRandom == dsRandom2) {
					throw new Error('Random strings were the same');
				}
				done();
			});
		});
	}

	private static testJsonUtil() {
		describe(`Json Util Test`, () => {
			it('It should merge jsons', (done) => {
				const arJoParam1 = [
					{ idTag: 1, nmTag: 'Marketing' },
					{ idTag: 2, nmTag: 'Vendas' },
					{ idTag: 3, nmTag: 'Comercial' },
					{ idTag: 4, nmTag: 'Carreira' }
				];
				const arJoParam2 = [
					{ idTag: 1, idUserTag: 1 },
					{ idTag: 2, idUserTag: 2 },
					{ idTag: 3, idUserTag: 3 }
				];
				const joResult = JsonUtil.mergeJoPerKey('idTag', arJoParam1, arJoParam2, true);
				const joExpectedResult = [
					{ idTag: 1, idUserTag: 1, nmTag: 'Marketing', isMerged: true },
					{ idTag: 2, idUserTag: 2, nmTag: 'Vendas', isMerged: true },
					{ idTag: 3, idUserTag: 3, nmTag: 'Comercial', isMerged: true },
					{ idTag: 4, nmTag: 'Carreira' }
				];

				if (!JsonUtil.isSameArJo(joResult, joExpectedResult, true, 'idTag', 'nmTag', 'idUserTag', 'isMerged')) {
					throw new Error('Jsons were not the same');
				}

				done();
			});

			it('it should test getArNmKeyMissingInJoParam', (done) => {
				const joParam = { lkPreview: 'www.youtube.com' };
				const arNmKeyMissingInJoParam = JsonUtil.getArNmKeyMissingInJoParam(joParam, 'lkPreview');
				const isLkPreviewMissing = arNmKeyMissingInJoParam.length > 0;
				if (isLkPreviewMissing) {
					throw new Error('wrong value expected');
				}
				done();
			});
		});
	}
}
