import { KeyEnum } from "../I18n/I18n";

export default class CtContent {

	public key: number
	public nm: string

	public static readonly channelCover = new CtContent(1, KeyEnum.channelCover);
	public static readonly case = new CtContent(2, KeyEnum.case);
	public static readonly checklist = new CtContent(3, KeyEnum.checklist);
	public static readonly course = new CtContent(4, KeyEnum.course);
	public static readonly freeCourse = new CtContent(5, KeyEnum.freeCourse);
	public static readonly quickTips = new CtContent(6, KeyEnum.quickTips);
	public static readonly ebook = new CtContent(7, KeyEnum.ebook);
	public static readonly tool = new CtContent(8, KeyEnum.tool);
	public static readonly phrases = new CtContent(9, KeyEnum.phrases);
	public static readonly guide = new CtContent(10, KeyEnum.guide);
	public static readonly hatch = new CtContent(11, KeyEnum.hatch);
	public static readonly infoGraphic = new CtContent(12, KeyEnum.infoGraphic);
	public static readonly game = new CtContent(13, KeyEnum.game);
	public static readonly kit = new CtContent(14, KeyEnum.kit);
	public static readonly nonDefined = new CtContent(15, KeyEnum.nonDefined);
	public static readonly onSale = new CtContent(16, KeyEnum.onSale);
	public static readonly paper = new CtContent(17, KeyEnum.paper);
	public static readonly spreadsheet = new CtContent(18, KeyEnum.spreadsheet);
	public static readonly podcast = new CtContent(19, KeyEnum.podcast);
	public static readonly text = new CtContent(20, KeyEnum.text);
	public static readonly quiz = new CtContent(21, KeyEnum.quiz);
	public static readonly report = new CtContent(22, KeyEnum.report);
	public static readonly template = new CtContent(23, KeyEnum.template);
	public static readonly video = new CtContent(24, KeyEnum.video);
	public static readonly webSeries = new CtContent(25, KeyEnum.webSeries);
	public static readonly webinar = new CtContent(26, KeyEnum.webinar);
	public static readonly nonIdentified = new CtContent(27, KeyEnum.nonIdentified);
	public static readonly event = new CtContent(28, KeyEnum.event);
	public static readonly interview = new CtContent(29, KeyEnum.interview);
	public static readonly glossary = new CtContent(30, KeyEnum.glossary);
	public static readonly research = new CtContent(31, KeyEnum.research);
	public static readonly draft = new CtContent(32, KeyEnum.draft);
	public static readonly question = new CtContent(33, KeyEnum.question);
	public static readonly update = new CtContent(34, KeyEnum.update);
	public static readonly relevantInformation = new CtContent(35, KeyEnum.relevantInformation);
	public static readonly salesHack = new CtContent(36, KeyEnum.salesHack);
	public static readonly post = new CtContent(37, KeyEnum.post);
	public static readonly salesfyTutorial = new CtContent(38, KeyEnum.salesfyTutorial);
	public static readonly battlecard = new CtContent(39, KeyEnum.battlecard);

	private constructor(key: number, nm: string) {
		this.key = key
		this.nm = nm
	}

	public static get(key: number): CtContent {
		let ctContent: CtContent
		switch (key) {
			case this.channelCover.key: ctContent = this.channelCover; break;
			case this.case.key: ctContent = this.case; break;
			case this.checklist.key: ctContent = this.checklist; break;
			case this.course.key: ctContent = this.course; break;
			case this.freeCourse.key: ctContent = this.freeCourse; break;
			case this.quickTips.key: ctContent = this.quickTips; break;
			case this.ebook.key: ctContent = this.ebook; break;
			case this.tool.key: ctContent = this.tool; break;
			case this.phrases.key: ctContent = this.phrases; break;
			case this.guide.key: ctContent = this.guide; break;
			case this.hatch.key: ctContent = this.hatch; break;
			case this.infoGraphic.key: ctContent = this.infoGraphic; break;
			case this.game.key: ctContent = this.game; break;
			case this.kit.key: ctContent = this.kit; break;
			case this.nonDefined.key: ctContent = this.nonDefined; break;
			case this.onSale.key: ctContent = this.onSale; break;
			case this.paper.key: ctContent = this.paper; break;
			case this.spreadsheet.key: ctContent = this.spreadsheet; break;
			case this.podcast.key: ctContent = this.podcast; break;
			case this.text.key: ctContent = this.text; break;
			case this.quiz.key: ctContent = this.quiz; break;
			case this.report.key: ctContent = this.report; break;
			case this.template.key: ctContent = this.template; break;
			case this.video.key: ctContent = this.video; break;
			case this.webSeries.key: ctContent = this.webSeries; break;
			case this.webinar.key: ctContent = this.webinar; break;
			case this.nonIdentified.key: ctContent = this.nonIdentified; break;
			case this.event.key: ctContent = this.event; break;
			case this.interview.key: ctContent = this.interview; break;
			case this.glossary.key: ctContent = this.glossary; break;
			case this.research.key: ctContent = this.research; break;
			case this.draft.key: ctContent = this.draft; break;
			case this.question.key: ctContent = this.question; break;
			case this.update.key: ctContent = this.update; break;
			case this.relevantInformation.key: ctContent = this.relevantInformation; break;
			case this.salesHack.key: ctContent = this.salesHack; break;
			case this.post.key: ctContent = this.post; break;
			case this.salesfyTutorial.key: ctContent = this.salesfyTutorial; break;
			case this.battlecard.key: ctContent = this.battlecard; break;
			default: ctContent = this.post;
		}
		return ctContent
	}
}
