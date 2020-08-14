
const materialTableLocation = {
	pagination: {
		labelDisplayedRows: '{from}-{to} de {count}', // {from}-{to} of {count}
		labelRowsPerPage: 'Linhas por página:', // Rows per page:
		firstTooltip: 'Primeira página', // First Page
		previousTooltip: 'Página anterior', // Previous Page
		nextTooltip: 'Próxima página', // Next Page
		lastTooltip: 'Última página', // Last Page
	},
	toolbar: {
		nRowsSelected: '{0} linha(s) selecionadas', // {0} row(s) selected
		showColumnsTitle: 'Mostrar colunas', // Show Columns
		showColumnsAriaLabel: 'Mostrar colunas', // Show Columns
		exportTitle: 'Exportar', // Export
		exportAriaLabel: 'Exportar', // Export
		exportName: 'Exportar como CSV', // Export as CSV
		searchTooltip: 'Pesquisar', // Search
		searchPlaceholder: ""
	},
	header: {
		actions: '', // Actions
	},
	body: {
		emptyDataSourceMessage: 'Não há itens para mostrar', // No records to display
		filterRow: {
			filterTooltip: 'Filtro', // Filter
		},
	},
}

export const evertonLevarProFrontEnd = {
	...materialTableLocation,
	appOffline: "Parece que você não está conectado, verifique sua conexão e tente novamente! " +
		"Se o problema persistir, entre em contato conosco.",
	appProblem: "Aconteceu um problema com o seu app, tente novamente! " +
		"Se o problema persistir, entre em contato conosco.",

	acceptTerms: "Aceite os termos de uso",
	signIn: "Entrar",
	register: "Cadastrar",
	viewLinkContent: "Ver mais",
	loading: "Carregando",
	feed: "Feed",
	cancel: "Cancelar",
	skipIntro: "Pular Introdução",
	doLogin: "Fazer Login",
	news: "Novidades",
	save: "Salvar",
	next: "Próximo",
	refresh: "Atualizar",
	contact: "Entre em contato",
	reload: "Recarregar",
	ops: "Ops...",
	add: "Adicionar",
	detail: "Detalhe",
	detail_plural: "Detalhes",
	optional: "Opcional",
	delete: "Excluir",
	remove: "Remover",
	confirm: "Confirmar",
	filter: "Buscar",

	recoveryPassword: "Recuperar senha",
	forgotPassword: "Esqueceu sua senha",
	forgotPassword_ask: "Esqueceu sua senha?",
	alreadyRegistered: "Já é cadastrado",
	alreadyRegistered_ask: "Já é cadastrado?",
	offer: "Oferta",
	offer_plural: "Ofertas",
	selected: "Selecionado",
	selected_plural: "Selecionados",
	iAccept: "Li e aceito",
	iAccept_the: "Li e aceito os",
	termsOfUse: "Termos de uso",

	emptyFavorite: "Você ainda não possui conteúdos em seus favoritos.",

	// emptyFeed: "Não há conteúdos para mostrar.",
	// emptyOffer: "Não há ofertas para mostrar.",
	// emptySearch: "Não há conteúdos com essa busca para mostrar.",
	// emptyChannel: "Não há galerias para mostrar.",
	// emptyChannelSearch: "Não há galerias com essa busca para mostrar.",
	// emptyItems: "Não há itens para mostrar.",
	nmKeyEmpty: "Não há {{nmKey}} para mostrar",
	nmKeyEmptySearch: "Não há {{nmKey}} com essa busca para mostrar",

	// newUser: "Novo usuário",
	// newGroup: "Nova equipe",
	nmKeyNew: "Novo {{nmKey}}",

	// importContent: "Importar conteúdos",
	// importSource: "Importar Conteúdos",
	nmKeyImport: "Importar {{nmKey}}",

	// insertLink: "Insira um Link",
	// insertImage: "Adicione uma imagem",
	nmKeyAdd: "Adicionar {{nmKey}}",
	nmKeyAddA: "Adicionar um {{nmKey}}",
	nmKeyAddThe: "Adicionar o {{nmKey}}",
	nmKeyAddThe_female: "Adicionar o {{nmKey}}",
	nmKeyAddA_female: "Adicionar uma {{nmKey}}",

	// chooseChannels: "Escolha as galerias",
	// selectAPicture: "Selecione uma imagem",
	// changePicture: "Trocar imagem",
	nmKeySelect: "Escolha {{nmKey}}",
	nmKeySelectA: "Escolha um {{nmKey}}",
	nmKeySelectThe: "Escolha o {{nmKey}}",
	nmKeySelectA_female: "Escolha uma {{nmKey}}",
	nmKeySelectThe_female: "Escolha a {{nmKey}}",
	nmKeySelectA_plural: "Escolha alguns {{nmKey}}",
	nmKeySelectThe_plural: "Escolha os {{nmKey}}",
	nmKeySelectA_female_plural: "Escolha algumas {{nmKey}}",
	nmKeySelectThe_female_plural: "Escolha as {{nmKey}}",

	nmVerbNmKey: "{{nmVerb}} {{nmKey}}",
	nmVerbNmKeyA: "{{nmVerb}} um {{nmKey}}",
	nmVerbNmKeyThe: "{{nmVerb}} o {{nmKey}}",
	nmVerbNmKeyA_plural: "{{nmVerb}} alguns {{nmKey}}",
	nmVerbNmKeyThe_plural: "{{nmVerb}} os {{nmKey}}",
	nmVerbNmKeyA_female: "{{nmVerb}} uma {{nmKey}}",
	nmVerbNmKeyThe_female: "{{nmVerb}} a {{nmKey}}",
	nmVerbNmKeyA_female_plural: "{{nmVerb}} algumas {{nmKey}}",
	nmVerbNmKeyThe_female_plural: "{{nmVerb}} as {{nmKey}}",

	// groupName: "Nome da equipe",
	// contentImage: "Imagem do conteúdo",
	nmKeyOfNmItem: "{{nmKey}} do {{nmItem}}",
	nmKeyOfNmItem_female: "{{nmKey}} da {{nmItem}}",
	nmKeyOfNmItem_pĺural: "{{nmKey}} dos {{nmItem}}",
	nmKeyOfNmItem_female_plural: "{{nmKey}} das {{nmItem}}",
	// describeYourContent: "Descreva seu conteúdo",
	// contentLink: "Link do seu conteúdo",
	nmKeyOfYourNmItem: "{{nmKey}} do seu {{nmItem}}",
	nmKeyOfYourNmItem_female: "{{nmKey}} da sua {{nmItem}}",
	nmKeyOfYourNmItem_plural: "{{nmKey}} dos seus {{nmItem}}",
	nmKeyOfYourNmItem_female_plural: "{{nmKey}} das suas {{nmItem}}",

	// nameOrEmail: "Nome ou Email",
	nmItem1OrNmItem2: "{{nmItem1}} or {{nmItem2}}",

	channelMessage: "Galerias que você pode gostar",
	inputTitle: "O título do seu conteúdo aqui",
	inputDescription: "Insira aqui uma descrição para o seu conteúdo",
	insertLinkDescription: "Seu conteúdo pode ser complementado com um download, " +
		"ou levar o leitor até seu blog. Informe a URL no campo abaixo.",
	insertImageDescription: "Selecione a capa do seu conteúdo. "
		+ "Observação: sua imagem deve ter até 300kb e poderá ser cortada para incluir no template.",
	visualizationContent: "Seu conteúdo ficou assim:",
	selectPublishType: "O que você deseja publicar?",
	channelAwardTitle: "Os melhores conteúdos selecionados por tema.",
	channelTitle: "Os melhores canais de conteúdos você encontra aqui.",
	importSourceDescription: "Se você já produz conteúdos sobre gestão, carreira ou negócios, " +
		"publique-os em Salesfy de forma rápida, fácil e gratuita. " +
		"Basta nos dizer onde podemos encontrar seus conteúdos.",
	importReference: "Referência",
	importReferenceDescription: "Insira o link para sua página abaixo. " +
		"Salesfy se encarrega de integrar seus conteúdos. Em instantes seus conteúdos estarão aqui!",
	contentSuccessfulPublish: "Conteúdo publicado com sucesso!",
	importContentSuccessFul: "Solicitação enviada com sucesso! Em breve entraremos em contato.",
	salesPlaybook: "Playbook de Vendas",
	salesIntelligence: "Sales Intelligence",
	awardsTitle: "Tudo sobre o processo de vendas, na sua mão.",
	channelsTitle: "Conteúdos para vender mais e melhor.",
	loginWithFacebook: "Entrar com Facebook",
	loginWithGoogle: "Entrar com Google",
	addOrInviteUser: "Adicione ou convide usuários",
	contentSelectionDay: "Seleção de conteúdos do dia",
	passwordRecoverySuccessful: "Senha recuperada com sucesso. Verifique seu e-mail para prosseguir!",
	contentLinkDescription: "Insira o link do conteúdo para que possamos prepará-lo para você!",
	notRegistered: "Ainda não sou registrado",
	registerEmailSuccess: "Recebemos seu cadastro, em breve entraremos em contato!",
	yourContentDetails: "Detalhes do seu conteúdo",
	chooseTemplateContent: "Escolha o modelo do seu conteúdo",
	waitPrepareContent: "Aguarde enquanto preparamos o conteúdo para você!",
	shareInChannels: "Compartilhar conteúdo nas galerias",
	shareInChannelsDescription: "Selecione galerias para compartilhar conteúdos com sua equipe!",
	unrelizedImageUpload: "Upload da imagem falhou, por favor, tente novamente!",
	// lkContentErrorNotFound: "Conteúdo não encontrado",
	lkContentErrorNotFoundDetails: "Não conseguimos identificar automaticamente seu conteúdo, "
		+ "mas não se preocupe, você ainda pode customiza-lo!",
	// requiredFields: "Preencha os campos obrigatórios!",
	invalidLink: "Digite um link válido!",
	notRegisteredTitle: "Cadastre seu email e entraremos em contato!",
	preparingUserRegister: "Só mais uns segundos. Encontramos as melhores ideias para você!",
}
