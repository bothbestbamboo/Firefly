import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "bamboo table top",
		imgurl:
			"https://www.bambooindustry.com/images/flooring-banner.jpg",
		desc: "Bamboo flooring has a very wide varieties, including solid, engineered, strand woven, click lock, click strand, heating, hand scraped, brushed, distressed, industrial parquet and flooring accessories.",
		siteurl: "https://www.bambooindustry.com/blog/bamboo-standing-tabletop-desktops.html",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "bamboo plywood",
		imgurl: "https://www.bambooindustry.com/images/plywood-banner.jpg",
		desc: "Bamboo means natural. Each plywood then can slightly differ both in its structure and colour. It consists of numerous slats compressed together - each of the slats of thousands of strands. That's why it has such a non-uniform, organic structure - and this is what makes the material exceptional.",
		siteurl: "https://www.bambooindustry.com/products/bamboo-panel/bamboo-plywood.html",
		tags: ["Docs"],
		weight: 9,
		enabled: true,
	},
	{
		title: "bamboo decking",
		imgurl: "https://www.bambooindustry.com/images/decking-banner.jpg",
		desc: "Bamboo decking is an eco-friendly and environmental deck. It is an ideal alternative for traditional hardwood decking and WPC decking. Bamboo decking brings you a new idea to make real green choice, merging functionality with aesthetics for a spectacular and durable outdoor space.",
		siteurl: "https://www.bambooindustry.com/products/bamboo-flooring/bamboo-decking.html",
		tags: ["Framework"],
		weight: 8,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
