import * as Joi from 'joi'
import { LayerValidate, ValJoiUtil } from '../../../../EntryPoint';

export default class UserVal extends LayerValidate {

	protected static getSchema(arValSubset? : string[], isNew? : boolean) : Joi.SchemaMap {
		const joSchema : Joi.SchemaMap = {}
		if (!isNew) {
			joSchema.id = Joi.number().required()
			joSchema.idUser = joSchema.id
		}
		joSchema.crKeyPassword = Joi.string().required()
		joSchema.emUser = ValJoiUtil.joiStringSchemaEmail().required()

		joSchema.dhRegister = Joi.date().timestamp()
		joSchema.snTelephone = ValJoiUtil.joiStringSchemaTelephone()
		joSchema.snWhatsapp = ValJoiUtil.joiStringSchemaTelephone()
		joSchema.piAvatar = ValJoiUtil.joiStringSchemaWeblink()
		joSchema.nmCompany = ValJoiUtil.joiStringSchemaName()
		joSchema.nmCargo = ValJoiUtil.joiStringSchemaName()
		joSchema.lkFacebook = ValJoiUtil.joiStringSchemaWeblink()
		joSchema.lkLinkedin = ValJoiUtil.joiStringSchemaWeblink()
		joSchema.dsTestimony = Joi.string().min(0).max(2000)
		joSchema.lkWebsite = ValJoiUtil.joiStringSchemaWeblink()
		return joSchema
	}

	protected static getIdKey() : string {
		return "idUser"
	}
}
