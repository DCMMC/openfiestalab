module.exports = {
	title: '保研圈',
	head: [
		['link', { rel: 'icon', href: '/image/logoof.png' }],
		['link', { rel: 'stylesheet', href: `https://use.fontawesome.com/releases/v5.1.0/css/all.css` }]
	],
	base: '/',
	description: '保研圈',
	dest: 'public',
	locales: {
		'/': {
			lang: 'zh-CN',
		},
		'/en/': {
			lang: 'en-US'
		},
	},
	plugins: [
		require('./my-plugin.js')
	],
	globalUIComponents: [],
	themeConfig: {
		logo: '/image/logoof.png',
		prevLinks: false,
		nextLinks: false,
		repo: 'https://github.com/DCMMC/openfiestalab',
		repoLabel: 'Github',
		docsDir: 'labguide',
		docsBranch: 'master',
		editLinks: true,
		locales: {
			'/en/': {
				nav: [
					{ text: 'Home', link: '/en/' },
					{
						text: 'Story',
						items: [
							{ text: '经管', link: '/zh/CV/content' },
							{ text: '理科', link: '/zh/CV/content' },
							{ text: '电子、计算机、控制', link: '/zh/CV/content' },
							{ text: '土木', link: '/zh/CV/content' },
							{ text: '人文社科', link: '/zh/CV/content' },
							{ text: '生化环材', link: '/zh/CV/content' },
						]
					},
					{
						text: 'Contact us',
						items: [
							{ text: 'Online Store', link: 'https://taobao.com' }
						]
					},
					{
						text: 'About us',
						items: [
							{ text: 'About BaoYanQuan', link: '/zh/about' },
						]
					},
				],
				label: 'English',
				displayAllHeaders: true,
				sidebar: [
					{
						title: '经管',
						path: '/zh/CV/content',
						collapsable: true,
						sidebarDepth: 0,
						children: [
							['/zh/CV/kaorou', '烤肉店老板娘'],
							['/zh/CV/xiaorongjie', '小荣姐'],
							['/zh/CV/xiaoqi', '小七学姐'],
						]
					},
					{
						title: '理科',
						path: '/zh/CV/content',
						collapsable: true,
						sidebarDepth: 0,
						children: [
							['/zh/CV/shushuren', '术术人'],
						]
					},
					{
						title: '电子、计算机、控制',
						path: '/zh/CV/content',
						collapsable: true,
						sidebarDepth: 0,
						children: [
							['/zh/CV/content', 'Alex学长'],
							['/zh/CV/shijiediyichihuo', '世界第一吃货殿下']
						]
					},
					{
						title: '土木',
						path: '/zh/CV/content',
						collapsable: true,
						sidebarDepth: 0,
						children: [
							['/zh/CV/chuizige', '锤子哥'],
							['/zh/CV/tushanyuexia', '涂山月下'],
							['/zh/CV/xiaohaibao', '小海豹'],
						]
					},
					{
						title: '人文社科',
						path: '/zh/CV/content',
						collapsable: true,
						sidebarDepth: 0,
						children: [
							['/zh/CV/shandong', '山东大葱葱'],
							['/zh/CV/jiujing', '酒精泡芙'],
						]
					},
					{
						title: '生化环材',
						path: '/zh/CV/content',
						collapsable: true,
						sidebarDepth: 0,
						children: [
							['/zh/CV/shelly', 'Shelly 学姐'],
						]
					},
				]
			},
			'/': {
				selectText: '选择语言',
				label: '简体中文',
				editLinkText: '在 GitHub 上编辑此页',
				serviceWorker: {
					updatePopup: {
						message: "发现新内容可用.",
						buttonText: "刷新"
					}
				},
				nav: [
					{ text: '主页', link: '/' },
					{
						text: '咨询师故事',
						items: [
							{ text: '经管', link: '/zh/CV/content' },
							{ text: '理科', link: '/zh/CV/content' },
							{ text: '电子、计算机、控制', link: '/zh/CV/content' },
							{ text: '土木', link: '/zh/CV/content' },
							{ text: '人文社科', link: '/zh/CV/content' },
							{ text: '生化环材', link: '/zh/CV/content' },
						]
					},
					{
						text: '联系我们',
						items: [
							{ text: '网上商店', link: 'https://taobao.com' }
						]
					},
					{
						text: '关于我们',
						items: [
							{ text: '关于保研圈', link: '/zh/about' },
						]
					},
				],
				label: '简体中文',
				displayAllHeaders: true,
				sidebar: [
					{
						title: '经管',
						path: '/zh/CV/content',
						collapsable: true,
						sidebarDepth: 0,
						children: [
							['/zh/CV/kaorou', '烤肉店老板娘'],
							['/zh/CV/xiaorongjie', '小荣姐'],
							['/zh/CV/xiaoqi', '小七学姐'],
						]
					},
					{
						title: '理科',
						path: '/zh/CV/content',
						collapsable: true,
						sidebarDepth: 0,
						children: [
							['/zh/CV/shushuren', '术术人'],
						]
					},
					{
						title: '电子、计算机、控制',
						path: '/zh/CV/content',
						collapsable: true,
						sidebarDepth: 0,
						children: [
							['/zh/CV/content', 'Alex学长'],
							['/zh/CV/shijiediyichihuo', '世界第一吃货殿下']
						]
					},
					{
						title: '土木',
						path: '/zh/CV/content',
						collapsable: true,
						sidebarDepth: 0,
						children: [
							['/zh/CV/chuizige', '锤子哥'],
							['/zh/CV/tushanyuexia', '涂山月下'],
							['/zh/CV/xiaohaibao', '小海豹'],
						]
					},
					{
						title: '人文社科',
						path: '/zh/CV/content',
						collapsable: true,
						sidebarDepth: 0,
						children: [
							['/zh/CV/shandong', '山东大葱葱'],
							['/zh/CV/jiujing', '酒精泡芙'],
						]
					},
					{
						title: '生化环材',
						path: '/zh/CV/content',
						collapsable: true,
						sidebarDepth: 0,
						children: [
							['/zh/CV/shelly', 'Shelly 学姐'],
						]
					},
				]
			}
		}
	}
}
