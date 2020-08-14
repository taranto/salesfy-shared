export const messages = {
	generatePasswordExpired: "The new password generation code has already expired. Please request a new one",
	generatePasswordNotExpected: "There is no password generation code being expected. Please request a new one",
	wrongPasswordGenerationCode: "The password generation code is incorrect. Please request a new one",
}

export const emails = {
	emailHello: "Hello User!",
	emailRegardsLeader: "Regards, {{nmDevLeader}}",
	emailSalesfyTeam: "Customer Success team",
	emailSalesfySlogan: "Everything about sales in your hand.",
	emailDoubtContact: "In case of doubt, get in touch through our email: {{emContact}}",

	emailGeneratePasswordSubject: "New password generated for SALESFY",
	emailGeneratePasswordIntro: "Your password was changed as you requested. Your new password is:",
	emailGeneratePasswordEmail: "Email: {{emUser}}",
	emailGeneratePasswordNewPassword: "new Password: {{unKeyPassword}}",
	emailGeneratePasswordClosing:
		// "Remember to change it after accessing Salesfy. "+
		"If you have any question send us a message! We're at your disposal :)",

	emailPasswordRecoverySubject: "Password recovery requested in SALESFY",
	emailPasswordRecoveryIntro: "We've received a password recovery request for your login. " +
		"In case you've requested it, access the following link to receive your new password. " +
		// "Remember to change it after accessing Salesfy. "+
		"This link will be valid for 24hours.",
	emailPasswordRecoveryButton: "Receive new password",
	emailPasswordRecoveryClosing: "In case you've not requested the password recovery, ignore this email.",

	emailWelcomeSubject: "Welcome to SALESFY!",
	emailWelcomeHello: "Welcome to SALESFY!",
	emailWelcomeIntro: "From now on, you will be able to manage your playbooks with your team",
	emailWelcomePreConfirmation: "To start, just click on the button below to confirm your email:",
	emailWelcomeConfirmationButton: "Confirm your email",
	emailWelcomeClosing: "Thank you for the opportunity, and give us a feedback by sending an email to {{emContact}}. " +
		"It's gonna be a pleasure to hear from you :)",

	emailInviteSubject: "You have been invited to use Salesfy!",
	emailInviteIntro: "You received an invite from {{nmUser}} to access Salesfy!",
	emailInviteIntroGroup: "You received an invite from {{nmUser}} to access Salesfy at the {{nmGroup}} team",
	emailInvitePurpose: "Salesfy is a playbook plaform for sales teams engagement. " +
		" There you will find everything's needed to continuously optimize your performance.",
	emailInviteAccessLink: "Access {{lkSalesfy}} with the following data:",
	emailInviteAccessEmail: "Login: {{emUser}}",
	emailInviteAccessPassword: "Password: {{unKeyPassword}}",
	emailInviteByAccessingAcceptance: "Upon logging in, you're accepting our {{dsTerm}}",

	emailSocialsLoginAvailable: "" //TODO apagar depois. só coloquei pra fazer funcionar o branch
}
