import * as I18n from 'i18next';
import en from './locale/en'
import pt, { ITranslation } from './locale/pt'
import KeyEnum from './KeyEnum'
import { GeneralUtil, CtLocale } from '../../EntryPoint';

const options = {
	lng: "pt",
	fallbackLng: "pt",
	// debug: true,
	resources: {
		pt: {
			translation: pt
		},
		en: {
			translation: en
		}
	},
	interpolation: {
		escapeValue: false
	}
};
I18n.init(options);

export { KeyEnum };

export default class Internationalization {

	public static getFixedT(lng: null, ns: string | string[]): I18n.TranslationFunction {
		return I18n.getFixedT(lng, ns)
	}

	public static t(dsMsg: any, params = {}, nrLanguage?: string | number): string {
		if (nrLanguage != undefined) {
			const o = GeneralUtil.copy(options)
			const locale = this.getLocale(nrLanguage)
			o.lng = locale
			o.fallbackLng = locale
			params = {
				...o,
				...params
			}
		}
		const translation = I18n.t(dsMsg, params);
		return translation
	}

	/**
	 * set the new default locale
	 */
	public static setLocale(vlLocale: string) {
		I18n.init({ ...options, lng: vlLocale });
	}

	private static getLocale(obKeyLanguage: number | string): string {
		if (typeof obKeyLanguage == "string") {
			return obKeyLanguage
		}
		switch (obKeyLanguage) {
			case CtLocale.english.keyCtLocale:
				return CtLocale.english.nmCtLocale
			default:
				return CtLocale.portuguese.nmCtLocale
		}
	}

	public static getTranslation(obKeyTranslation: string | number): ITranslation {
		if (typeof obKeyTranslation == "string") {
			return Internationalization.getTranslationByStr(obKeyTranslation)
		}
		return Internationalization.getTranslationByNum(obKeyTranslation)
	}

	private static getTranslationByNum(nrTranslation: number): ITranslation {
		switch (nrTranslation) {
			case CtLocale.english.keyCtLocale:
				return en as ITranslation;
			default:
				return pt;
		}
	}

	private static getTranslationByStr(nmTranslation: string): ITranslation {
		switch (nmTranslation) {
			case CtLocale.english.nmCtLocale:
				return en as ITranslation;
			default:
				return pt;
		}
	}

	public static getTableTranslation(): any {
		switch (I18n.language) {
			case CtLocale.english.nmCtLocale:
				return en;
			default:
				return pt;
		}
	}
}
