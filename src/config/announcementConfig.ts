import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "Profile",

	// 公告内容
	content: "Bothbest is a professional factory of bamboo flooring in China, dedicated to manufacturing and exporting premium solid and engineered bamboo products worldwide. ",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "More",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
