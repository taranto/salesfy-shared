import { I18n, KeyEnum, CtLocale } from '../EntryPoint';
import { should } from 'chai';
import { describe, it } from 'mocha';

export class Internationalization {
	public static test() {
		describe('Internationalization Tests', () => {
			this.testTranslation('default translation', I18n.getTranslation(CtLocale.portuguese.nmCtLocale));

			this.testTranslation(
				'pt translation',
				I18n.getTranslation(CtLocale.portuguese.nmCtLocale),
				CtLocale.portuguese.nmCtLocale
			);

			this.testTranslation(
				'en translation',
				I18n.getTranslation(CtLocale.english.nmCtLocale),
				CtLocale.english.nmCtLocale
			);

			this.testHotTranslation();
		});
		describe('Test plural and gender', () => {
			this.testPluralAndGender();
		});
	}

	private static testPluralAndGender() {
		it(`it tests`, (done) => {
			I18n.setLocale(CtLocale.portuguese.nmCtLocale);
			should().equal(I18n.t(KeyEnum.testUser), 'Usuário');
			should().equal(I18n.t(KeyEnum.testUser_male, { context: 'male' }), 'O Usuário');
			should().equal(I18n.t(KeyEnum.testUser_female, { context: 'female' }), 'A Usuária');
			should().equal(I18n.t(KeyEnum.testUser_male, { context: 'male', count: 1 }), 'O Usuário');
			should().equal(I18n.t(KeyEnum.testUser_female, { context: 'female', count: 1 }), 'A Usuária');
			should().equal(I18n.t(KeyEnum.testUser_male_plural, { context: 'male', count: 2 }), 'Os Usuários');
			should().equal(I18n.t(KeyEnum.testUser_female_plural, { context: 'female', count: 2 }), 'As Usuárias');
			should().equal(
				I18n.t(KeyEnum.nmKeyTestUser_female_plural, { context: 'female', count: 2, nmKey: 'logaram' }),
				'As Usuárias logaram'
			);
			done();
		});
	}

	public static testTranslation(description: string, translation: any, tnl: string = 'pt') {
		describe('Internationalization Tests by re-set default locale', () => {
			before(() => {
				I18n.setLocale(tnl);
			});

			it(`${description} constants`, (done) => {
				should().equal(I18n.t(KeyEnum.testKey), translation.testKey);
				done();
			});

			const params = { nmKey: 'João' };

			it(`${description} messages`, (done) => {
				const nmProgramaticallyTranslated = translation.testKeyMessage.replace('{{nmKey}}', params.nmKey);
				const nmI18nTranslated = I18n.t(KeyEnum.testKeyMessage, params);
				should().equal(nmI18nTranslated, nmProgramaticallyTranslated);
				done();
			});
		});
	}

	public static testHotTranslation() {
		describe('Hot translation Tests', () => {
			Internationalization.hotTranslationIt('english', 'en number', CtLocale.english.keyCtLocale, 'Hello ');
			Internationalization.hotTranslationIt('english', 'en string', CtLocale.english.nmCtLocale, 'Hello ');
			Internationalization.hotTranslationIt('portuguese', 'pt number', CtLocale.portuguese.keyCtLocale, 'Olá ');
			Internationalization.hotTranslationIt('portuguese', 'pt string', CtLocale.portuguese.nmCtLocale, 'Olá ');
		});
	}

	private static hotTranslationIt(lang: string, using: string, vlLocale: string | number, dsTranslPrefix: string) {
		const name = 'Fernando';
		const joParam = { nmKey: name };
		it(`It should translate to ${lang} using ${using}`, (done) => {
			const desired = dsTranslPrefix + name;
			const test = I18n.t(KeyEnum.testKeyMessage, joParam, vlLocale);
			should().equal(test, desired);
			done();
		});
	}
}
