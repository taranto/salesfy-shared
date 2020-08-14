export const materialTableLocation = {
	pagination: {
		labelDisplayedRows: '{from}-{to} of {count}',
		labelRowsPerPage: 'Rows per page:',
		firstTooltip: 'First Page',
		previousTooltip: 'Previous Page',
		nextTooltip: 'Next Page',
		lastTooltip: 'Last Page',
	},
	toolbar: {
		nRowsSelected: '{0} row(s) selected',
		showColumnsTitle: 'Show Columns',
		showColumnsAriaLabel: 'Show Columns',
		exportTitle: 'Export',
		exportAriaLabel: 'Export',
		exportName: 'Export as CSV',
		searchTooltip: 'Search',
	},
	header: {
		actions: '',
	},
	body: {
		emptyDataSourceMessage: 'No records to display',
		filterRow: {
			filterTooltip: 'Filter',
		},
	},
}

export const evertonLevarProFrontEnd = {
	...materialTableLocation,
	appOffline: "Seems that you're not connected. Please verify your internet connection and try again! " +
		"If the problem persists, contact us.",
	appProblem: "A problem has happened with your app. Please try again! " +
		"If the problem persists, contact us.",

	acceptTerms: "Accept the terms and conditions",
	signIn: "Enter",
	register: "Register",
	viewLinkContent: "Read more",
	loading: "Loading",
	feed: "Feed",
	cancel: "Cancel",
	skipIntro: "Skip introduction",
	doLogin: "Log in",
	news: "News",
	save: "Save",
	next: "Next",
	refresh: "Update",
	contact: "Contact us",
	reload: "Reload",
	ops: "Ops...",
	add: "Add",
	detail: "Detail",
	detail_plural: "Details",
	optional: "Optional",
	delete: "Delete",
	remove: "Remove",
	confirm: "Confirm",
	filter: "Filter",

	recoveryPassword: "Password recovery",
	forgotPassword: "Forgot your password",
	forgotPassword_ask: "Forgot your password?",
	alreadyRegistered: "Already registered",
	alreadyRegistered_ask: "Already registered?",
	offer: "Offer",
	offer_plural: "Offers",
	selected: "Selected",
	selected_plural: "Selected",
	iAccept: "I read and agree",
	iAccept_the: "I read and agree the",
	termsOfUse: "Terms and conditions",

	emptyFavorite: "You still have no content in your favorite list",

	// emptyFeed: "Não há conteúdos para mostrar.",
	// emptyOffer: "Não há ofertas para mostrar.",
	// emptySearch: "Não há conteúdos com essa busca para mostrar.",
	// emptyChannel: "Não há galerias para mostrar.",
	// emptyChannelSearch: "Não há galerias com essa busca para mostrar.",
	// emptyItems: "Não há itens para mostrar.",
	nmKeyEmpty: "There's no {{nmKey}} to show",
	nmKeyEmptySearch: "There's no {{nmKey}} with this filtering to show",

	// newUser: "Novo usuário",
	// newGroup: "Nova equipe",
	nmKeyNew: "New {{nmKey}}",

	// importContent: "Importar conteúdos",
	// importSource: "Importar Conteúdos",
	nmKeyImport: "Import {{nmKey}}",

	// insertLink: "Insira um Link",
	// insertImage: "Adicione uma imagem",
	nmKeyAdd: "Add {{nmKey}}",
	nmKeyAddA: "Add a {{nmKey}}",
	nmKeyAddThe: "Add the {{nmKey}}",
	nmKeyAddThe_female: "Add The {{nmKey}}",
	nmKeyAddA_female: "Add a {{nmKey}}",

	// chooseChannels: "Escolha as galerias",
	// selectAPicture: "Selecione uma imagem",
	// changePicture: "Trocar imagem",
	nmKeySelect: "Select {{nmKey}}",
	nmKeySelectA: "Select a {{nmKey}}",
	nmKeySelectThe: "Select the {{nmKey}}",
	nmKeySelectA_female: "Select a {{nmKey}}",
	nmKeySelectThe_female: "Select the {{nmKey}}",
	nmKeySelectA_plural: "Select some {{nmKey}}",
	nmKeySelectThe_plural: "Select the {{nmKey}}",
	nmKeySelectA_female_plural: "Select some {{nmKey}}",
	nmKeySelectThe_female_plural: "Select the {{nmKey}}",

	nmVerbNmKey: "{{nmVerb}} {{nmKey}}",
	nmVerbNmKeyA: "{{nmVerb}} a {{nmKey}}",
	nmVerbNmKeyThe: "{{nmVerb}} the {{nmKey}}",
	nmVerbNmKeyA_plural: "{{nmVerb}} some {{nmKey}}",
	nmVerbNmKeyThe_plural: "{{nmVerb}} the {{nmKey}}",
	nmVerbNmKeyA_female: "{{nmVerb}} a {{nmKey}}",
	nmVerbNmKeyThe_female: "{{nmVerb}} the {{nmKey}}",
	nmVerbNmKeyA_female_plural: "{{nmVerb}} some {{nmKey}}",
	nmVerbNmKeyThe_female_plural: "{{nmVerb}} the {{nmKey}}",

	// groupName: "Nome da equipe",
	// contentImage: "Imagem do conteúdo",
	nmKeyOfNmItem: "{{nmKey}} of {{nmItem}}",
	nmKeyOfNmItem_female: "{{nmKey}} of {{nmItem}}",
	nmKeyOfNmItem_pĺural: "{{nmKey}} of {{nmItem}}",
	nmKeyOfNmItem_female_plural: "{{nmKey}} of {{nmItem}}",
	// describeYourContent: "Descreva seu conteúdo",
	// contentLink: "Link do seu conteúdo",
	nmKeyOfYourNmItem: "{{nmKey}} of your {{nmItem}}",
	nmKeyOfYourNmItem_female: "{{nmKey}} of your {{nmItem}}",
	nmKeyOfYourNmItem_plural: "{{nmKey}} of your {{nmItem}}",
	nmKeyOfYourNmItem_female_plural: "{{nmKey}} of your {{nmItem}}",

	// nameOrEmail: "Nome ou Email",
	nmItem1OrNmItem2: "{{nmItem1}} or {{nmItem2}}",

	channelMessage: "Galleries you may like",
	inputTitle: "The title of your content here",
	inputDescription: "Input here a description of your content",
	insertLinkDescription: "You may add a download or blog link to your content. Insert your URL below.",
	insertImageDescription: "Select your content cover. "
		+ "Tip: Your image must contain a maximum of 300kb, and may be cropped.",
	visualizationContent: "Your content ended up like this:",
	selectPublishType: "What would you like to publish?",
	channelAwardTitle: "The best contents divided by subject.",
	channelTitle: "You can find the best content galleries right here.",
	importSourceDescription: "If you already write contents about management, carreer or business, " +
		"publish it quickly, easily and for free in Salesfy. " +
		"Just tell us where to find your content.",
	importReference: "Reference",
	importReferenceDescription: "Insert the link for your page below. " +
		"Salesfy will import your contents automatically. Soon they'll be all be here",
	contentSuccessfulPublish: "Content successfully published!",
	importContentSuccessFul: "Request successfully sent! Soon we'll contact you.",
	salesPlaybook: "Sales Playbook",
	salesIntelligence: "Sales Intelligence",
	awardsTitle: "Everything about sales process on your hand.",
	channelsTitle: "Content to sell more and better.",
	loginWithFacebook: "Enter with Facebook",
	loginWithGoogle: "Enter with Google",
	addOrInviteUser: "Add and invite users",
	contentSelectionDay: "Daily content selection",
	passwordRecoverySuccessful: "Password successfully recovered. Verify your email to proceed.",
	contentLinkDescription: "Insert a content link for us to prepare it for you!",
	notRegistered: "I'm not registered yet",
	registerEmailSuccess: "We've received your registering. Soon we'll contact you!",
	yourContentDetails: "Content details",
	chooseTemplateContent: "Select your content template",
	waitPrepareContent: "Wait until we prepare the content for you!",
	shareInChannels: "Share the gallery content",
	shareInChannelsDescription: "Select the galleries to share content with your team!",
	unrelizedImageUpload: "The image upload has failed. Please try again!",
	// lkContentErrorNotFound: "Conteúdo não encontrado",
	lkContentErrorNotFoundDetails: "We could not identify automatically your content, but don't worry! "
		+ "You can still customize it ",
	// requiredFields: "Preencha os campos obrigatórios!",
	invalidLink: "Insert a valid link",
	notRegisteredTitle: "Insert your email here, and we will contact you",
	preparingUserRegister: "Wait just a few seconds. We're separating the best contents for you!",
}
