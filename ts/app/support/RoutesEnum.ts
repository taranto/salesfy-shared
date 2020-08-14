enum RoutesEnum {
	root = "/",
	userLogin = "/user/login",
	userRegister = "/user/register",
	userPasswordRecovery = "/user/passwordRecovery",
	userGeneratePassword = "/user/generatePassword",
	userChangePassword = "/user/changePassword",
	userEmailConfirmation = "/user/emailConfirmation",
	userLogoff = "/user/logoff",
	userLogged = "/user/logged",
	userLoginFacebook = "/user/login/facebook",
	userLoginGmail = "/user/login/gmail",
	userTag = "/userTag",
	userMe = "/user/me",
	userGroup = "/userGroup",
	user = "/user",
	userNetwork = "/user/network",

	tag = "/tag",
	content = "/content",
	contentPublishPackage = "/content/publishPackage", //old?
	userContent = "/userContent",
	contentView = "/content/view", //old?
	contentConversion = "/content/conversion",
	contentChannel = "/contentChannel",

	channelStories = "/channel/stories",
	channelCopy = "/channel/copy",
	channelImport = "/channel/import",
	channel = "/channel",
	channelGroup = "/channelGroup",
	channelGroupAllGroups = "/channelGroup/allGroups",
	notifyMsg = "/notifyMessage",
	contact = "/contact",
	group = "/group",
	invite = "/invite",
	envReload = "/envReload",
	file = "/file",
	preview = "/preview",
	workspace = "/workspace",

	//--------- web routes
	conteudo = "/conteudo",
	msg = "/msg"
}
export default RoutesEnum;
