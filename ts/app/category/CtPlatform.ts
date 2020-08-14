export default class CtPlatform {

	public keyCtPlatform: number
	public nmCtPlatform: string
	public lkCtPlatformBase: string|undefined
	public piCtPlatform: string|undefined

	public static readonly facebook = new CtPlatform(1, "Facebook", "www.facebook.com", "facebook.png");
	public static readonly youtube = new CtPlatform(2, "YouTube", "www.youtube.com", "youtube.png");
	public static readonly tumblr = new CtPlatform(3, "Tumblr", "www.tumblr.com", "tumblr.png");
	public static readonly linkedin = new CtPlatform(4, "LinkedIn", "www.linkedin.com", "linkedin.png");
	public static readonly instagram = new CtPlatform(5, "Instagram", "www.instagram.com", "instagram.png");
	public static readonly blog = new CtPlatform(6, "Blog", "", "blog.png");
	public static readonly medium = new CtPlatform(7, "Medium", "www.medium.com", "medium.png");
	public static readonly outros = new CtPlatform(8, "Outros", "", "others.png");
	public static readonly twitter = new CtPlatform(9, "Twitter", "www.twitter.com", "twitter.png");

	private constructor(keyCtPlatform: number, nmCtPlatform: string, lkCtPlatformBase?: string, piCtPlatform?: string) {
		this.keyCtPlatform = keyCtPlatform
		this.nmCtPlatform = nmCtPlatform
		this.lkCtPlatformBase = lkCtPlatformBase
		this.piCtPlatform = piCtPlatform
	}
}
