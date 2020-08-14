import { should } from "chai"
import { describe } from "mocha"
import { UserVal, IUser } from "../../../../EntryPoint";

export class UserValSpec {
	public static test() {
		const joUser = generateEntity();
		describe("UserVal validation Tests @business @user", () => {
			it("should validate default user", (done) => {
				const theError = UserVal.isJoValid(joUser).error
				should().equal(theError, null)
				done();
			});
			it("should validate if user is new (through idUser)", (done) => {
				delete joUser.idUser
				const theError = UserVal.isJoValid(joUser, ["idUser"], true).error
				should().equal(theError, null);
				done();
			});
			it("should validate if user is new (through id)", (done) => {
				delete joUser.id
				const theError = UserVal.isJoValid(joUser, ["id"], true).error
				should().equal(theError, null);
				done();
			});
			it("should validate a user with a single different attribute", (done) => {
				const joUserDifferent = generateEntity({emUser : "littlealbert@asd.com", nmCargo : "Nuclear Physicist"});
				const theError = UserVal.isJoValid(joUserDifferent).error
				should().equal(theError, null);
				done();
			});
			it("should validate a whole different user", (done) => {
				const joDiffUser = {
					id : 2,
					idUser : 2,
					nmUser : "Albertinho",
					crKeyPassword : "encription",
					emUser : "albert@nasa.com",
					dhRegister : new Date(),
					snTelephone : "5548991315193",
					snWhatsapp : "5548991315193",
					piAvatar : "http://www.arte-coa.pt/Ficheiros/Imagem/1761/1761.pt.jpg",
					nmCompany : "NASA",
					nmCargo : "Physicist",
					lkFacebook : "https://goo.gl/images/kfqoKQ",
					lkLinkedin : "https://goo.gl/images/kfqoKQ",
					dsTestimony : "bla bla bla",
					lkWebsite : "http://www.arte-coa.pt/Ficheiros/Imagem/1761/1761.pt.jpg"
				}
				const theError = UserVal.isJoValid(joDiffUser).error
				should().equal(theError, null);
				done();
			});

			UserValSpec.invalidateUserMissingAttrs();

		});
	}

	private static invalidateUserMissingAttrs() {
		const joBasicUser = {
			id: 3,
			idUser: 3,
			crKeyPassword: "encription",
			emUser: "albert@nasa.com",
		};
		const joBasicUser2 = JSON.parse(JSON.stringify(joBasicUser));
		delete joBasicUser2.id;
		UserValSpec.invalidateUserMissingAttr(joBasicUser2, "id");
		const joBasicUser3 = JSON.parse(JSON.stringify(joBasicUser));
		delete joBasicUser3.idUser;
		UserValSpec.invalidateUserMissingAttr(joBasicUser3, "idUser");
		const joBasicUser6 = JSON.parse(JSON.stringify(joBasicUser));
		delete joBasicUser6.crKeyPassword;
		UserValSpec.invalidateUserMissingAttr(joBasicUser6, "crKeyPassword");
		const joBasicUser7 = JSON.parse(JSON.stringify(joBasicUser));
		delete joBasicUser7.emUser;
		UserValSpec.invalidateUserMissingAttr(joBasicUser7, "emUser");
	}

	public static invalidateUserMissingAttr(joBasicUser : any, nmAtr : string) {
		it(`should invalidate user missing a single required value (${nmAtr})`, (done) => {
			const theError = UserVal.isJoValid(joBasicUser).error
			should().not.equal(theError, null);
			done();
		});
	}
}

const generateEntity = (joEntityAtExcep? : any) : any => {
	if (!joEntityAtExcep) {
		joEntityAtExcep = {}
	}
	const joUsrUser = {
		id : defineParam(joEntityAtExcep.idUser, 1),
		idUser : defineParam(joEntityAtExcep.idUser, 1),
		nmUser : defineParam(joEntityAtExcep.nmUser, "Silvio"),
		crKeyPassword : defineParam(joEntityAtExcep.crKeyPassword, "anEncription"),
		emUser : defineParam(joEntityAtExcep.emUser, "email@email.com"),
		dhRegister : defineParam(joEntityAtExcep.dhRegister, new Date()),
		snTelephone : defineParam(joEntityAtExcep.snTelephone, "5548991315193"),
		snWhatsapp : defineParam(joEntityAtExcep.snWhatsapp, "5548991315193"),
		piAvatar : defineParam(joEntityAtExcep.piAvatar, "http://www.arte-coa.pt/Ficheiros/Imagem/1761/1761.pt.jpg"),
		nmCompany : defineParam(joEntityAtExcep.nmCompany, "Salesfy"),
		nmCargo : defineParam(joEntityAtExcep.nmCompany, "Developer"),
		lkFacebook : defineParam(joEntityAtExcep.lkFacebook, "https://goo.gl/images/kfqoKQ"),
		lkLinkedin : defineParam(joEntityAtExcep.lkLinkedin, "https://goo.gl/images/kfqoKQ"),
		dsTestimony : defineParam(joEntityAtExcep.dsTestimony, "bla bla bla"),
		lkWebsite : defineParam(joEntityAtExcep.piAvatar, "http://www.arte-coa.pt/Ficheiros/Imagem/1761/1761.pt.jpg"),
		crKeyRefreshToken : ''
	}
	return joUsrUser
}

const defineParam = (atExcep : any, atDefault : any) : any => {
	return atExcep || atDefault
}
