export const messages = {
	generatePasswordExpired: "O código de geração de nova senha está expirado. Por favor requisite um novo",
	generatePasswordNotExpected: "Não há código de geração de nova senha sendo esperado. Por favor requisite um novo",
	wrongPasswordGenerationCode: "O código de geração de nova senha está incorreto. Por favor requisite um novo",
}

export const emails = {
	emailHello: "Olá Usuário!",
	emailRegardsLeader: "Respeitosamente, {{nmDevLeader}}",
	emailSalesfyTeam: "Equipe de Customer Success",
	emailSalesfySlogan: "Tudo sobre o processo de vendas, na sua mão.",
	emailDoubtContact: "Em caso de dúvidas entre em contato conosco pelo email {{emContact}}",

	emailGeneratePasswordSubject: "Nova senha gerada em SALESFY",
	emailGeneratePasswordIntro: "Sua senha de Salesfy foi alterada conforme sua solicitação. Sua nova senha é:",
	emailGeneratePasswordEmail: "Email: {{emUser}}",
	emailGeneratePasswordNewPassword: "Nova Senha: {{unKeyPassword}}",
	emailGeneratePasswordClosing:
		// "Lembre-se de alterar sua senha após acessar Salesfy. "+
		"Em caso de dúvidas, Estamos à disposição! :)",

	emailPasswordRecoverySubject: "Recuperação de senha requisitada em SALESFY",
	emailPasswordRecoveryIntro: "Recebemos um pedido para alteração de senha do seu usuário. " +
		"Caso tenha solicitado, acesse o link abaixo para receber sua nova senha. " +
		// "Lembre-se de trocá-la em seguida. "+
		"Este link estará válido por 24 horas.",
	emailPasswordRecoveryButton: "Receber nova senha",
	emailPasswordRecoveryClosing: "Caso não tenha requisitado a recuperação de senha, ignore este email.",

	emailWelcomeSubject: "Bem vindo a SALESFY!",
	emailWelcomeHello: "Bem vindo a SALESFY!",
	emailWelcomeIntro: "A partir de hoje você será capaz de gerenciar seus playbooks com sua equipe!",
	emailWelcomePreConfirmation: "Para começar, basta clicar no botão abaixo para confirmar seu e-mail:",
	emailWelcomeConfirmationButton: "Confirme seu email",
	emailWelcomeClosing: "Agradecemos a oportunidade! Qualquer dúvida, crítica ou consideração, " +
		"pode nos mandar um e-mail no {{emContact}}. Será um prazer",

	emailInviteSubject: "Você está sendo convidado para usar Salesfy!",
	emailInviteIntro: "Você recebeu um convite de {{nmUser}}, para ingressar em Salesfy!",
	emailInviteIntroGroup: "Você recebeu um convite de {{nmUser}}, para ingressar na equipe {{nmGroup}} no Salesfy!",
	emailInvitePurpose: "Salesfy é a plataforma que engaja os times de vendas no playbook, " +
		"onde encontram tudo que é necessário para otimizar continuamente a performance.",
	emailInviteAccessLink: "Acesse {{lkSalesfy}} com os seguintes dados:",
	emailInviteAccessEmail: "Login: {{emUser}}",
	emailInviteAccessPassword: "Senha: {{unKeyPassword}}",
	emailInviteByAccessingAcceptance: "Ao logar, você estará concordando com os nossos {{htmlTerm}}",

	emailSocialsLoginAvailable: "Caso este seu email esteja vinculado a algum serviço que tenhamos integração, "+
		"não se preocupe com senha! Logue diretamente por estes serviços facilmente!"
}
