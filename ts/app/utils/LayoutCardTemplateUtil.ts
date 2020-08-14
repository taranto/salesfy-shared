import BooleanUtil from './BooleanUtil';

export type IContentConfig = { [key: string]: boolean };

export interface ICardTemplate {
	cdTemplate: number;
	arrTrue: string[];
	arrFalse: string[];
}

export type IarCardTemplate = ICardTemplate[];

export default class LayoutCardTemplateUtil {
	public static TEMPLATE_1 = {
		cdTemplate: 1,
		arrTrue: [ 'shShowTitle', 'shShowDescription', 'shShowActionButtons', 'shShowShareButton', 'shShowPublisher' ],
		arrFalse: [ 'shShowShortCard', 'shShowFullscreenImage' ]
	};
	public static TEMPLATE_2 = {
		cdTemplate: 2,
		arrTrue: [ 'shShowFullscreenImage', 'shShowActionButtons', 'shShowShareButton', 'shShowPublisher' ],
		arrFalse: [ 'shShowShortCard', 'shShowTitle', 'shShowDescription' ]
	};
	public static TEMPLATE_3 = {
		cdTemplate: 3,
		arrTrue: [
			'shShowFullscreenImage',
			'shShowTitle',
			'shShowActionButtons',
			'shShowShareButton',
			'shShowDescription',
			'shShowPublisher'
		],
		arrFalse: [ 'shShowShortCard' ]
	};
	public static TEMPLATE_4 = {
		cdTemplate: 4,
		arrTrue: [ 'shShowTitle', 'shShowActionButtons', 'shShowShareButton', 'shShowPublisher' ],
		arrFalse: [ 'shShowShortCard', 'shShowDescription', 'shShowFullscreenImage' ]
	};
	public static TEMPLATE_5 = {
		cdTemplate: 5,
		arrTrue: [ 'shShowFullscreenImage' ],
		arrFalse: [
			'shShowShortCard',
			'shShowTitle',
			'shShowDescription',
			'shShowActionButtons',
			'shShowShareButton',
			'shShowPublisher'
		]
	};
	public static TEMPLATE_6 = {
		cdTemplate: 6,
		arrTrue: [
			'shShowFullscreenImage',
			'shShowTitle',
			'shShowActionButtons',
			'shShowShareButton',
			'shShowPublisher'
		],
		arrFalse: [ 'shShowShortCard', 'shShowDescription' ]
	};
	public static TEMPLATE_7 = {
		cdTemplate: 7,
		arrTrue: [ 'shShowShortCard', 'shShowActionButtons' ],
		arrFalse: [ 'shShowFullscreenImage', 'shShowTitle', 'shShowDescription', 'shShowPublisher' ]
	};
	public static TEMPLATE_8 = {
		cdTemplate: 8,
		arrTrue: [ 'shShowFullscreenImage', 'shShowShortCard', 'shShowActionButtons' ],
		arrFalse: [ 'shShowTitle', 'shShowDescription', 'shShowPublisher' ]
	};

	public static getArrTemplate() {
		return [
			this.TEMPLATE_1,
			this.TEMPLATE_2,
			this.TEMPLATE_3,
			this.TEMPLATE_4,
			this.TEMPLATE_5,
			this.TEMPLATE_6,
			this.TEMPLATE_7,
			this.TEMPLATE_8
		];
	}

	public static getCd(joParam: IContentConfig): number {
		const arrTemplate: IarCardTemplate = this.getArrTemplate();
		let idTemplate = -1;
		if (arrTemplate) {
			arrTemplate.map((template: ICardTemplate) => {
				const isTemplate = BooleanUtil.isAllValidBooleans(joParam, template.arrTrue, template.arrFalse);
				if (idTemplate === -1 && isTemplate) {
					idTemplate = template.cdTemplate;
				}
			});
		}
		return idTemplate;
	}

	public static getTemplateParams(cdTemplate: number): any {
		const arrTemplate = this.getArrTemplate();
		if (arrTemplate) {
			const template = arrTemplate.filter((item) => item.cdTemplate === cdTemplate)[0];

			if (template) {
				return this.getObjectParams(template.arrTrue, template.arrFalse);
			}
		}
	}

	public static getObjectParams(arrTrue: string[], arrFalse: string[]) {
		let params = {};

		arrTrue.map((key) => {
			params = Object.assign(params, { [key]: true });
		});

		arrFalse.map((key) => {
			params = Object.assign(params, { [key]: false });
		});

		return params;
	}
}
