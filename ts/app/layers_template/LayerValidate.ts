import * as Joi from 'joi'

export default abstract class LayerValidate {

	protected static atToValidateSubset(joSchema : any, arValidateSubset? : string[], isNew? : boolean) {
		if (arValidateSubset) {
			const joSchemaNew : any = {}
			arValidateSubset.forEach(atRaw => {
				joSchemaNew[atRaw] = joSchema[atRaw]
			});
			joSchema = joSchemaNew
		}
		if (isNew) {
			delete joSchema[joSchema.id]
			delete joSchema[joSchema[this.getIdKey()]]
		}
	}

	public static isJoValid(validatableObject : any, arValidateAtSubset? : string[], isNew? : boolean)  {
		const joSchema = this.getSchema(arValidateAtSubset, isNew);
		this.atToValidateSubset(joSchema, arValidateAtSubset, isNew)
		const joSchemaDecorated = Joi.object().keys(joSchema).unknown(true)
		const joValidation = Joi.validate(validatableObject, joSchemaDecorated);
		return joValidation
	}

	protected static getSchema(arValidateSubset? : string[], isNew? : boolean) : Joi.SchemaMap {
		return {}
	}

	protected static getIdKey() : string {
		return ""
	}
}

// EXEMPLO para nos mantermos sabendo do padrão de dados
// {
// 	"error": {
// 		"isJoi": true,
// 		"name": "ValidationError",
// 		"details": [{
// 			"message": "\"username\" length must be at least 3 characters long",
// 			"path": ["username"],
// 			"type": "string.min",
// 			"context": {
// 				"limit": 3,
// 				"value": "ab",
// 				"key": "username",
// 				"label": "username"
// 			}
// 		}],
// 		"_object": {
// 			"username": "ab"
// 		}
// 	},
// 	"value": {
// 		"username": "ab"
// 	}
// }
