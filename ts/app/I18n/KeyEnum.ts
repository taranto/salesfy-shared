import translation, {ITranslation} from './locale/pt'

function getKeyEnum(){
	const keys:any = {};

	Object.keys(translation).map(key => {
		keys[key] = key;
	})

	return keys as ITranslation;
}

const keyEnum = getKeyEnum();

export default keyEnum;
