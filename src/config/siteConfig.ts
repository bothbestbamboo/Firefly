import type { SiteConfig } from "@/types/siteConfig";

// 定义站点语言
const SITE_LANG = "en";

export const siteConfig: SiteConfig = {
	// 站点标题
	title: "All Bamboo Flooring",

	// 站点副标题
	subtitle: "China Factory",

	// 站点 URL
	site_url: "https://www.allbambooflooring.com",

	// 站点描述
	description:
		"Bothbest is a professional factory of bamboo flooring in China, dedicated to manufacturing and exporting premium solid and engineered bamboo products worldwide.",

	// 站点关键词 (扩充了更多利于 SEO 的核心产品词汇)
	keywords: [
		"bamboo flooring",
		"bamboo decking",
		"bamboo plywood",
		"strand woven bamboo",
		"china bamboo factory",
		"bamboo manufacturer"
	],

	// 主题色 (保持原本的翠绿色，很符合竹子主题)
	themeColor: {
		hue: 135,
		fixed: true,
		defaultMode: "system",
	},

	// 页面整体宽度（单位：rem）
	pageWidth: 100,

	// 网站Card样式配置
	card: {
		border: true,
		followTheme: false,
	},

	// Favicon 配置
	favicon: [
		{
			src: "/favicon/favicon.ico",
		},
	],

	// 导航栏配置
	navbar: {
		logo: {
			type: "image",
			value: "/favicon/newlogo.png",
			alt: "Bothbest Bamboo Logo",
		},
		title: "Bothbest",
		widthFull: false,
		menuAlign: "center",
		followTheme: false,
		stickyNavbar: true,
	},

	// 站点开始日期，用于统计运行天数
	siteStartDate: "2025-01-01",

	// 站点时区
	timezone: "Asia/Shanghai",

	// 🌟 页面开关配置 - 已进行去二次元化改造
	pages: {
		// 友链页面开关 (外贸站可保留，建议前端修改文案为 "Partners")
		friends: true,
		// 打赏页面开关 -> 关闭
		sponsor: false,
		// 留言板/询盘页面开关
		guestbook: true,
		// 番组计划页面开关 -> 关闭
		bangumi: false,
		// 相册/工厂实景页面开关
		gallery: true,
		// 追番页面开关 -> 关闭
		anime: false,
	},

	// 分类导航栏开关，在首页和归档页顶部显示分类快捷导航
	categoryBar: true,

	// 归档页是否折叠非最新年份文章
	foldArticle: true,

	// 文章列表布局配置
	postListLayout: {
		defaultMode: "list",
		mobileDefaultMode: "list",
		showTags: true,
		descriptionLines: 2,
		allowSwitch: true,
		grid: {
			masonry: false,
			columnWidth: 320,
		},
	},

	// 文章内容页配置
	post: {
		rehypeCallouts: {
			theme: "github",
			enablePythonMarkdownAdmonitions: false,
		},
		showLastModified: true,
		outdatedThreshold: 30,
		// 分享海报功能（B2B站保留不错，客户可以保存产品参数发给同事）
		sharePoster: true,
		generateOgImages: false,
	},

	// ❌ 番组配置 (Bangumi) - 已完全删除
	// ❌ 追番配置 (Anime) - 已完全删除

	// 分页配置
	pagination: {
		postsPerPage: 10,
	},

	// 图像优化及响应式配置
	imageOptimization: {
		formats: "webp",
		quality: 85,
		// 清除了 Bilibili 相关的图片防盗链白名单，如果你们自己图床有防盗链可以加在这里
		noReferrerDomains: [],
	},

	// 站点语言
	lang: SITE_LANG,
};