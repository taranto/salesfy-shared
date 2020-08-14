import * as Joi from 'joi'
import ValUtil from './ValUtil';
import ValJoiMsgUtil from './ValJoiMsgUtil';
import SConst from '../support/SConst';

export default class ValJoiUtil extends ValUtil {

	public static joiStringSchemaTelephone(
		min=+SConst.VAL_TELEPHONE_MIN_SIZE, max=+SConst.VAL_TELEPHONE_MAX_SIZE) : Joi.StringSchema {
		return Joi.string().alphanum().min(min).max(max)
		.regex(ValJoiUtil.rgNumber())
		.error(()=>ValJoiMsgUtil.joiStringSchemaTelephone())
	}

	public static joiStringSchemaEmail() : Joi.StringSchema {
		return Joi.string().regex(ValJoiUtil.rgEmail())
		.error(()=>ValJoiMsgUtil.joiStringSchemaEmail())
	}

	public static joiStringSchemaWeblink() : Joi.StringSchema {
		return Joi.string()
		.error(()=>ValJoiMsgUtil.joiStringSchemaWeblink())
	}

	public static joiStringSchemaName(
		min=+SConst.VAL_NAME_MIN_SIZE, max=+SConst.VAL_NAME_MAX_SIZE) : Joi.StringSchema {
		return Joi.string().min(min).max(max).regex(ValJoiUtil.rgName())
		.error(()=>ValJoiMsgUtil.joiStringSchemaName())
	}

	public static joiStringSchemaPassword(
		min=+SConst.VAL_PASSWORD_MIN_SIZE, max=+SConst.VAL_PASSWORD_MAX_SIZE) : Joi.StringSchema {
		return Joi.string().min(min).max(max).regex(ValJoiUtil.rgPassword())
		.error(()=>ValJoiMsgUtil.joiStringSchemaPassword())
	}
}
