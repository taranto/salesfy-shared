import KeyEnum from "../KeyEnum";
import { emails, messages } from "./to_backend.pt";
import { evertonLevarProFrontEnd } from "./to_frontend.pt";

const notifyMsgs = {
	updateVersionSoft: "Há uma nova versão de Salesfy com novas funcinoalidades! Atualize seu app!",
	updateVersionHard: "Há uma nova versão de Salesfy com novas funcinoalidades! Atualize seu app para continuar!"
}

const warnings = {
	required: "Obrigatório",
	required_female: "Obrigatória",
	required_plural: "Obrigatórios",
	required_female_plural: "Obrigatórias",

	nmKeyRequired: "{{nmKey}} é obrigatório",
	nmKeyRequired_female: "{{nmKey}} é obrigatória",
	nmKeyRequired_plural: "{{nmKey}} são obrigatórios",
	nmKeyRequired_female_plural: "{{nmKey}} são obrigatórias",

	nmKeyProhibited: "{{nmKey}} não é permitido",
	nmKeyProhibited_female: "{{nmKey}} não é permitida",
	nmKeyProhibited_plural: "{{nmKey}} não são permitidos",
	nmKeyProhibited_female_plural: "{{nmKey}} não são permitidas",

	nmKeyInWrongFormat: "{{nmKey}} não está no formato correto",
	nmKeyInWrongFormat_plural: "{{nmKey}} não estão no formato correto",

	passwordsWereNotTheSame: "As senhas não são as mesmas",
	cannotRevokeLastAuth: "Você não deve revogar a última autorização",
}

const exceptions = {
	nmKeyAlreadyExists: "{{nmKey}} já existe",
	nmKeyAlreadyExists_plural: "{{nmKey}} já existem",

	nmKeyNotFound: "{{nmKey}} não encontrado",
	nmKeyNotFound_female: "{{nmKey}} não encontrada",
	nmKeyNotFound_plural: "{{nmKey}} não encontrados",
	nmKeyNotFound_female_plural: "{{nmKey}} não encontradas",

	userNotAuthorized: "Usuário não autorizado",
	operationNotPermitted: "Operação não permitida",

	tokenInvalid: "Token inválido",
	accessTokenInvalid: "Access token inválido",
	refreshTokenInvalid: "Refresh token inválido",
	accessTokenExpired: "Access token expirado",
	refreshTokenExpired: "Refresh token expirado",
	accessTokenUndefined: "Access token indefinido",
	refreshTokenUndefined: "Refresh token indefinido",
	refreshTokenDiffFromStored: "Refresh token diferente do armazenado",

	authenticationProblem: "Há algum problema com a sua autenticação",
	incorrectUserEmailConfirmationKey: "A chave de validação está incorreta",
	emailAlreadyValidated: "Seu email já está validado",
	incorrectPassword: "Senha incorreta",
	failedToRetrieveLinkData: "Falha em recuperar dados do link",
	bulkLimitExceeded: "Excesso de itens",
	pageSizeExceeded: "A página é muito pesada: {{lkPreview}}",
	notHtmlPage: "Não é uma página HTML: {{lkPreview}}",
	notAllowedToRetreiveData: "Não foi possível recuperar dados: {{lkPreview}}",

	wrongRoute: "Wrong route!",
	insertProblem: "Insert problem"
}

const errors = {
	somethingWentWrong: "Algo inesperado aconteceu nos nossos servidores, mas não se preocupe!" +
		" Somos alertados a cada vez que esta mensagem aparece." +
		" Vamos procurar resolver este problema o mais rápido possível",
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
	valEmail: "Um email deve conter pelo menos uma palavra, um @ e um ponto",
	valWeblink: "Um weblink deve iniciar com http://, https:// ou www.",
	nmKeyValFormatCharacters: "Um {{nmKey}} deve conter somente letras",
	nmKeyValFormatNumbers: "Um {{nmKey}} deve conter somente números",
	nmKeyValFormatLowercase: "{{nmKey}} deve possuir apenas letras minúsculas",
	nmKeyValFormatLenght: "{{nmKey}} deve conter entre {{min}} e {{max}} caracteres",
	nmKeyValFormatLenghtMax: "{{nmKey}} deve conter até {{max}} caracteres",
	nmKeyValFormatLenghtMin: "{{nmKey}} deve conter pelo menos {{min}} caracteres",
	valueOutOfLimits: "O valor deve estar entre {{min}} e {{max}}"
}

const test = {
	testKey: "PT tradução",
	testKeyMessage: "Olá {{nmKey}}",
	testUser : "Usuário",
	testUser_male: "O Usuário",
	testUser_female: "A Usuária",
	testUser_male_plural: "Os Usuários",
	testUser_female_plural: "As Usuárias",
	nmKeyTestUser_female_plural: "As Usuárias {{nmKey}}"
}

const attributes = {
	password: "Senha",
	name: "Nome",
	email: "Email",
	login: "Login",
	link: "Link",
	bond: "vínculo",
}

const entities = {
	Salesfy: "Salesfy",
	group: "Equipe",
	group_plural: "Equipes",
	profile: "Perfil",
	subject: "Assunto",
	audience: "Público",
	niche: "Nicho",
	publisher: "Publicador",
	user: "Usuário",
}

const words = {
	publish: "Publicar",
	authorization: "Autorização",
}

const phrases = { //TODO ainda verificar que seção/arquivo isso aqui ficará
	favorite: "Favorito",
	favorite_plural: "Favoritos",
	anEmailWasSentToAndRecover: "Um email foi enviado para {{emUser}}. " +
		"Acesse-o para continuar com a recuperação de sua senha",
	aNewPasswordWasGeneratedAndSent: "Uma nova senha foi gerada e enviada para {{emUser}}",
	yourPasswordWasChanged: "Sua senha foi alterada",
	pwRecoveryLinkExpiredRequireNew: "Seu link de recuperação de email expirou. Por favor, requisite um novo link",
	emailConfirmed: "O email {{emUser}} foi confirmado como seu!",
	termsOfUse: "Termos de uso e política de privacidade"
}

const ctContent = {
	channelCover: "capa de galeria",
	case: "case",
	checklist: "checklist",
	course: "curso",
	freeCourse: "curso grátis",
	quickTips: "dicas rápidas",
	ebook: "ebook",
	tool: "ferramenta",
	phrases: "frases",
	guide: "guia",
	hatch: "hatch",
	infoGraphic: "infográfico",
	game: "jogo",
	kit: "kit",
	nonDefined: "não definido",
	onSale: "oferta",
	paper: "paper",
	spreadsheet: "planilha",
	podcast: "podcast",
	text: "texto",
	quiz: "quiz",
	report: "relatório",
	template: "modelo",
	video: "vídeo",
	webSeries: "web série",
	webinar: "webinar",
	nonIdentified: "não id",
	event: "evento",
	interview: "entrevista",
	glossary: "glossário",
	research: "pesquisa",
	draft: "resenha",
	question: "pergunta",
	update: "atualização",
	relevantInformation: "informação relevante",
	salesHack: "hack de vendas",
	post: "post",
	salesfyTutorial: "tutorial Salesfy",
	battlecard: "Battlecard",
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

type ITranslation = typeof translation;
export { ITranslation };
export default translation;
