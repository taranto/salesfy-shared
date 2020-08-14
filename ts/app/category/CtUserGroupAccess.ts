export default class CtUserGroupAccess {

	public static readonly admin = new CtUserGroupAccess(1)
	public static readonly member = new CtUserGroupAccess(2)
	public static readonly reader = new CtUserGroupAccess(3)

	public key: number

	public constructor(key: number) {
		this.key = key
	}

	public static get(key: number): CtUserGroupAccess {
		let ctUserGroupAccess: CtUserGroupAccess
		switch (key) {
			case this.admin.key: ctUserGroupAccess = this.admin; break;
			case this.member.key: ctUserGroupAccess = this.member; break;
			case this.reader.key: ctUserGroupAccess = this.reader; break;
			default: ctUserGroupAccess = this.reader;
		}
		return ctUserGroupAccess
	}

	public static isUserGroupAdmin(key: number): boolean {
		const isUserGroupAdmin = CtUserGroupAccess.get(key) == CtUserGroupAccess.admin
		return isUserGroupAdmin
	}

	public static isUserGroupMember(key: number): boolean {
		const isUserGroupMember = CtUserGroupAccess.get(key) == CtUserGroupAccess.member
		return isUserGroupMember
	}

	public static isUserGroupReader(key: number): boolean {
		const isUserGroupReader = CtUserGroupAccess.get(key) == CtUserGroupAccess.reader
		return isUserGroupReader
	}

	public static isDowngrading(keyBase: number, keyTarget: number): boolean {
		const ctUGABase = CtUserGroupAccess.get(keyBase)
		const ctUGATarget = CtUserGroupAccess.get(keyTarget)
		if (ctUGABase == ctUGATarget) {
			return false
		}
		if (ctUGABase == CtUserGroupAccess.admin) {
			return true
		}
		if (ctUGATarget == CtUserGroupAccess.admin) {
			return false
		}
		if (ctUGATarget == CtUserGroupAccess.reader) {
			return true
		}
		if (ctUGABase == CtUserGroupAccess.reader) {
			return false
		}
		return false
	}

	public static isUpgrading(keyBase: number, keyTarget: number): boolean {
		const ctUGABase = CtUserGroupAccess.get(keyBase)
		const ctUGATarget = CtUserGroupAccess.get(keyTarget)
		if (ctUGABase == ctUGATarget) {
			return false
		}
		if (ctUGABase == CtUserGroupAccess.admin) {
			return false
		}
		if (ctUGATarget == CtUserGroupAccess.admin) {
			return true
		}
		if (ctUGATarget == CtUserGroupAccess.reader) {
			return false
		}
		if (ctUGABase == CtUserGroupAccess.reader) {
			return true
		}
		return true
	}
}
