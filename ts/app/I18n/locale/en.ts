import { ITranslation } from "./pt";
import { emails, messages } from "./to_backend.en";
import { evertonLevarProFrontEnd } from "./to_frontend.en";

const notifyMsgs = {
	updateVersionSoft: "There's a new Salesfy version with new features! Update your app!",
	updateVersionHard: "There's a new Salesfy version with new features! Update your app to continue!"
}

const warnings = {
	required: "Required",
	required_female: "Required",
	required_plural: "Required",
	required_female_plural: "Required",

	nmKeyRequired: "{{nmKey}} is required",
	nmKeyRequired_female: "{{nmKey}} is required",
	nmKeyRequired_plural: "{{nmKey}} are required",
	nmKeyRequired_female_plural: "{{nmKey}} are required",

	nmKeyProhibited: "{{nmKey}} is not allowed",
	nmKeyProhibited_female: "{{nmKey}} is not allowed",
	nmKeyProhibited_plural: "{{nmKey}} are not allowed",
	nmKeyProhibited_female_plural: "{{nmKey}} are not allowed",

	nmKeyInWrongFormat: "{{nmKey}} is not in the right format",
	nmKeyInWrongFormat_plural: "{{nmKey}} are not in the right format",

	passwordsWereNotTheSame: "The passwords are not the same",
	cannotRevokeLastAuth: "You should not revoke the last authorization",
}

const exceptions = {
	nmKeyAlreadyExists: "{{nmKey}} already exists",
	nmKeyAlreadyExists_plural: "{{nmKey}} already exist",

	nmKeyNotFound: "{{nmKey}} not found",
	nmKeyNotFound_female: "{{nmKey}} not found",
	nmKeyNotFound_plural: "{{nmKey}} not found",
	nmKeyNotFound_female_plural: "{{nmKey}} not found",

	userNotAuthorized: "User not authorized",
	operationNotPermitted: "Operation not permitted",

	tokenInvalid: "Invalid token",
	accessTokenInvalid: "Access token not valid",
	refreshTokenInvalid: "Refresh token not valid",
	accessTokenExpired: "Access token expired",
	refreshTokenExpired: "Refresh token expired",
	accessTokenUndefined: "Access token undefined",
	refreshTokenUndefined: "Refresh token undefined",
	refreshTokenDiffFromStored: "Refresh token different than the one stored",

	authenticationProblem: "There's a problem in your authentication",
	incorrectUserEmailConfirmationKey: "The validation key is incorrect",
	emailAlreadyValidated: "Your email is already validated",
	incorrectPassword: "Incorrect password",
	failedToRetrieveLinkData: "Failed to retrieve link data",
	bulkLimitExceeded: "Exceeded quantity of items",
	pageSizeExceeded: "Page size exceeded",
	notHtmlPage: "It is not an html page",
	notAllowedToRetreiveData: "We were not allowed to retreive data",

	wrongRoute: "Wrong route!",
	insertProblem: "Insert problem"
}

const errors = {
	somethingWentWrong: "Something wrong happened in our servers, but don't worry!"+
	" We're notified every time this message shows up." +
	" We're will look for to solve this problem as soon as possible",
	parametersAreMissing: "Parameters are missing",
	userNotFoundInRefreshToken: "User not found in refresh token",
	wrongLogoff: "Someone's trying to log himself off with a dsRefreshToken in a mistakenly way. idUser: {{idUser}}",
	databaseProblem: "There's a database problem",
	tokenProblem: "There's a token problem",
	sessionProblem: "There's a session problem",
	dbInsertProblem: "There's a database insert problem",
	redisProblem: "There's a redis problem",
	csrfProblem: "There's a csrf problem",
	clusterProblem: "There's a cluster problem",
	unreachable: "Unreachable",
	envVarProblem: "There's a environment variable problem",
	unhandledExcepError: "Unhandled error",
	uncaughtExcepError: "Uncaught error",
	exitError: "Exit error",
	beforeExitError: "Before exit error",
}

const validators = {
	valEmail: "An email must contain at least one word, an @ and a dot",
	valWeblink: "A weblink must start with http://, https:// or www.",
	nmKeyValFormatCharacters: "A {{nmKey}} must contain only characters",
	nmKeyValFormatNumbers: "A {{nmKey}} must contain only numbers",
	nmKeyValFormatLowercase: "A {{nmKey}} must contain only lowercased characters",
	nmKeyValFormatLenght: "{{nmKey}} must contain between {{min}} and {{max}} characters",
	nmKeyValFormatLenghtMax: "{{nmKey}} must contain a maximum of {{max}} characters",
	nmKeyValFormatLenghtMin: "{{nmKey}} must contain a minimum of {{min}} characters",
	valueOutOfLimits: "The value must be between {{min}} and {{max}}"
}

const test = {
	testKey: "EN translation",
	testKeyMessage: "Hello {{nmKey}}",
	testUser : "User",
	testUser_male: "The user",
	testUser_female: "The user",
	testUser_male_plural: "The users",
	testUser_female_plural: "The users",
	nmKeyTestUser_female_plural: "The users {{nmKey}}"
}

const attributes = {
	password: "Password",
	name: "Name",
	email: "Email",
	login: "Login",
	link: "Link",
	bond: "Link",
}

const entities = {
	Salesfy: "Salesfy",
	group: "Team",
	group_plural: "Teams",
	profile: "Profile",
	subject: "Subject",
	audience: "Audience",
	niche: "Niche",
	publisher: "Publisher",
	user: "User",
}

const words = {
	publish: "Publish",
	authorization: "Authorization",
}

const phrases = { //TODO ainda verificar que seção/arquivo isso aqui ficará
	favorite: "Favorite",
	favorite_plural: "Favorites",
	anEmailWasSentToAndRecover: "An email was sent to {{emUser}}. " +
		"Access this email to continue the process of password recovery",
	aNewPasswordWasGeneratedAndSent: "A new password was generated and sent to {{emUser}}",
	yourPasswordWasChanged: "Your password was changed",
	pwRecoveryLinkExpiredRequireNew: "Your password recovery link is expired. Please, request a new one",
	emailConfirmed: "The email {{emUser}} is confirmed as yours!",
	termsOfUse: "Terms of use and privacy policy"
}
const ctContent = {
	channelCover: "channel cover",
	case: "case",
	checklist: "checklist",
	course: "course",
	freeCourse: "free course",
	quickTips: "quick tips",
	ebook: "ebook",
	tool: "tool",
	phrases: "phrases",
	guide: "guide",
	hatch: "hatch",
	infoGraphic: "infographic",
	game: "game",
	kit: "kit",
	nonDefined: "non defined",
	onSale: "on sale",
	paper: "paper",
	spreadsheet: "spreadsheet",
	podcast: "podcast",
	text: "text",
	quiz: "quiz",
	report: "report",
	template: "template",
	video: "video",
	webSeries: "web series",
	webinar: "webinar",
	nonIdentified: "non defined",
	event: "event",
	interview: "interview",
	glossary: "glossary",
	research: "research",
	draft: "draft",
	question: "question",
	update: "update",
	relevantInformation: "relevant information",
	salesHack: "sales hack",
	post: "post",
	salesfyTutorial: "salesfy tutorial",
	battlecard: "battlecard",
}

const translation = {
	...notifyMsgs,
	...warnings,
	...exceptions,
	...errors,
	...validators,
	...emails,
	...test,
	...attributes,
	...entities,
	...words,
	...phrases,
	...ctContent,
	...warnings,
	...evertonLevarProFrontEnd,
	...messages
}
export default translation;
