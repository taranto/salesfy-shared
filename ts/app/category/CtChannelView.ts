export default class CtChannelView {

	public key: number

	public static readonly default = new CtChannelView(1);
	public static readonly widescreen = new CtChannelView(2);

	private constructor(key: number) {
		this.key = key
	}
}
