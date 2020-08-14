export default class CtSystem {

	public key: number
	public nm: string

	public static readonly android = new CtSystem(0, "Android")
	public static readonly iphone = new CtSystem(1, "iPhoneOS")
	public static readonly web = new CtSystem(2, "Web")

	private constructor(keyCtSystem: number, nmCtSystem: string) {
		this.key = keyCtSystem
		this.nm = nmCtSystem
	}

	public static get(obCtSystem: number | string): CtSystem {
		if (typeof obCtSystem == "string") {
			return this.getByNm(obCtSystem)
		}
		if (typeof obCtSystem == "number") {
			return this.getByKey(obCtSystem)
		}
		return this.web
	}

	public static getByKey(keyCtSystem: number): CtSystem {
		let ctSystem: CtSystem
		switch (keyCtSystem) {
			case this.android.key: ctSystem = this.android; break;
			case this.iphone.key: ctSystem = this.iphone; break;
			case this.web.key: ctSystem = this.web; break;
			default: ctSystem = this.web;
		}
		return ctSystem
	}

	public static getByNm(nmCtSystem: string): CtSystem {
		let ctSystem: CtSystem
		switch (nmCtSystem) {
			case this.android.nm: ctSystem = this.android; break;
			case this.iphone.nm: ctSystem = this.iphone; break;
			case this.web.nm: ctSystem = this.web; break;
			default: ctSystem = this.web;
		}
		return ctSystem
	}

	public static isAndroid(nmCtSystem: string): boolean {
		return nmCtSystem == CtSystem.android.nm
	}

	public static isIPhone(nmCtSystem: string): boolean {
		return nmCtSystem == CtSystem.iphone.nm
	}

	public static isWeb(nmCtSystem: string): boolean {
		return nmCtSystem == CtSystem.web.nm
	}
}
