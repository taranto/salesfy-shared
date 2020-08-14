export default class CtCardState {

	public static readonly notViewed = new CtCardState(1)
	public static readonly notConverted = new CtCardState(2)
	public static readonly notConvertedUpdate = new CtCardState(3)
	public static readonly allConverted = new CtCardState(4)

	public key: number

	private constructor(key: number) {
		this.key = key
	}

	public static get(key: number): CtCardState {
		let ctCardState: CtCardState
		switch (key) {
			case this.notViewed.key: ctCardState = this.notViewed; break;
			case this.notConverted.key: ctCardState = this.notConverted; break;
			case this.notConvertedUpdate.key: ctCardState = this.notConvertedUpdate; break;
			case this.allConverted.key: ctCardState = this.allConverted; break;
			default: ctCardState = this.allConverted;
		}
		return ctCardState
	}

	public static getContentState(c: { qtView: number, dhLastConversion: Date, dhUpdate: Date }): CtCardState {
		if (c.qtView <= 1 && !c.dhLastConversion) {
			return CtCardState.notViewed
		}
		if (c.qtView > 1 && !c.dhLastConversion) {
			return CtCardState.notConverted
		}
		if (c.dhLastConversion && c.dhUpdate && new Date(c.dhLastConversion).getTime() < new Date(c.dhUpdate).getTime()) {
			return CtCardState.notConvertedUpdate
		}
		return CtCardState.allConverted
	}
}
