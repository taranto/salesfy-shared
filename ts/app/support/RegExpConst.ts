export default class RegExpConst {

	public static PASSWORD = /^[A-Za-zÀ-ú0-9!@#\$%\^&\*]{8,30}$/

	// http://emailregex.com/
	/* tslint:disable */ //como que divide em varias linhas?
	public static EMAIL =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	/* tslint:enable */

	// // http://urlregex.com/
	/* tslint:disable */ //como que divide regexp em varias linhas?
	// public static WEB_LINK = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
	/* tslint:enable */

	//https://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149
	public static LOGIN = /^[a-z0-9_-]{1,100}$/

	public static NUMBER = /^(\d+|\d*\.\d+)$/

	public static NUMBER_FORMATTED =
		/^(([\d-!$#@%^&*()_+|~=`{}\[\]:";'<>?,.\/ ])*([\d])([\d-!$#@%^&*()_+|~=`{}\[\]:";'<>?,.\/ ])*)+$/

	public static INTEGER = /^(\d+)$/

	public static NAME = /^[a-zA-ZÀ-ú ]/

	public static UNIX_FOLDER = /^([\\/][a-z0-9\s\-_\@\-\^!#$%&]*)+(\.[a-z][a-z0-9]+)?$/

	public static HTTP_S = /(http(s?)):\/\//
}
