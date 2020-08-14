import ValJoiUtil from "./ValJoiUtil";
import * as Joi from 'joi'
import ValJoiMsgUtil from "./ValJoiMsgUtil";

export default class ValJoiCompUtil {

	private static aggregate(schema: Joi.StringSchema, msg: string): { schema: Joi.StringSchema, msg: string } {
		return { schema: schema, msg: msg }
	}

	public static joiStringSchemaTelephone(): { schema: Joi.StringSchema, msg: string } {
		return ValJoiCompUtil.aggregate(
			ValJoiUtil.joiStringSchemaTelephone(), ValJoiMsgUtil.joiStringSchemaTelephone())
	}

	public static joiStringSchemaEmail(): { schema: Joi.StringSchema, msg: string } {
		return ValJoiCompUtil.aggregate(
			ValJoiUtil.joiStringSchemaEmail(), ValJoiMsgUtil.joiStringSchemaEmail())
	}

	public static joiStringSchemaWeblink(): { schema: Joi.StringSchema, msg: string } {
		return ValJoiCompUtil.aggregate(
			ValJoiUtil.joiStringSchemaWeblink(), ValJoiMsgUtil.joiStringSchemaWeblink())
	}

	public static joiStringSchemaName(): { schema: Joi.StringSchema, msg: string } {
		return ValJoiCompUtil.aggregate(
			ValJoiUtil.joiStringSchemaName(), ValJoiMsgUtil.joiStringSchemaName())
	}

	public static joiStringSchemaPassword(): { schema: Joi.StringSchema, msg: string } {
		return ValJoiCompUtil.aggregate(
			ValJoiUtil.joiStringSchemaPassword(), ValJoiMsgUtil.joiStringSchemaPassword())
	}
}
