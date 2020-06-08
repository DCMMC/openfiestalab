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
			lang: 'en-US'
		},
		'/zh/': {
			lang: 'zh-CN'
		}
	},
	plugins: [
		require('./my-plugin.js')
	],
	globalUIComponents: [
	],
	themeConfig:{
		logo: '/image/logoof.png',
		prevLinks: false,
		nextLinks: false,
		repo: 'https://github.com/DCMMC/openfiestalab',
		repoLabel: 'Github',
		docsDir: 'labguide',
		docsBranch: 'master',
		editLinks: true,
		locales: {
			'/': {
				nav:[
					{ text: 'Home', link: '/' },
					{
						text: 'Explore',
						items: [
							{
								text: 'Code of Conduct',
								link: '/coc/'
							},
							{
								text: 'lab & Space',
								link: '/labs/',
							},
							{
								text: 'Learning',
								link: '/learning/'
							},
							{
								text: 'Project',
								link: '/projects/'
							},
							{
								text: 'Event',
								link: '/events/'
							},
							{
								text: 'Club',
								link: '/club/'
							},
							{
								text: 'Toolbox',
								link: '/toolbox/'
							},
							{
								text: 'Friendly Link',
								link: '/link/'
							}
						]
					},
					{
						text: 'Program',
						items: [
							{ text: 'Residency Program', link: '/residency/' },
							{ text: 'Master Program', link: 'http://www.fiesta.tsinghua.edu.cn/admissions' }
						]
					},
					{
						text: 'About',
						items: [
							{ text: 'About Open FIESTA', link: '/about/' },
							{ text: 'About the website', link: '/website/' },
							{ text: 'Timeline', link: '/timeline/' },
							{
								text: 'GitHub Page',
								link: 'https://github.com/openfiesta'
							}                        ]
					}
				],
				displayAllHeaders: true,
				label: 'English',
				//                lastUpdated: 'Last Updated',
				sidebar: [
					['/coc', 'Code of Conduct'],
					{
						title: 'Labs',
						path: '/labs/',
						children: [
							['/labs/idea', 'Idea Cafe(J212)'],
							['/labs/bio', 'BIO-X Lab(J213)'],
							['/labs/iid', 'Design + Space(J211)'],
							['/labs/stu', 'Studio(J208)'],
							['/labs/machine', 'Machine Room(J201)']
						]
					},
					['/learning', 'Learning'],
					['/projects', 'Project'],
					['/events', 'Event'],
					['/club', 'Club'],
					['/toolbox', 'Toolbox'],
					['/link', 'Friendly Link']
				]
			},
			'/zh/': {
				nav: [
					{ text: '主页', link: '/zh/' },
					{
						text: '咨询师故事',
						items: [{
							text: '锤子哥',
							link: '/zh/CV/chuizige/'
						},
							{
								text: '酒精泡芙',
								link: '/zh/CV/jiujing/'
							},
							{
								text: '烤肉店老板娘 ',
								link: '/zh/CV/kaorou/'
							},
							{
								text: '山东大葱葱 ',
								link: '/zh/CV/shandong/'
							},
							{
								text: 'Shelly 学姐',
								link: '/zh/CV/shelly/'
							},
							{
								text: '世界第一吃货殿下',
								link: '/zh/CV/shijiediyichihuo/'
							},
							{
								text: '术术人',
								link: '/zh/CV/shushuren/'
							},
							{
								text: '涂山月下',
								link: '/zh/CV/tushanyuexia/'
							},
							{
								text: '小海豹',
								link: '/zh/CV/xiaohaibao/'
							},
							{ text: '小七学姐', link: '/zh/CV/xiaoqi/' },
							{ text: '小荣姐', link: '/zh/CV/xiaorongjie' }
						]
					},
					{
						text: '联系我们',
						items: [
							{ text: '入驻项目', link: '/zh/residency' },
							{ text: '硕士项目', link: 'http://www.fiesta.tsinghua.edu.cn/cn/admissions' }
						]
					},
					{
						text: '关于我们',
						items: [
							{ text: '关于保研圈', link: '/zh/about' },
							{ text: '关于网站', link: '/zh/website' },
							{ text: '时间线', link: '/zh/timeline' },
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
						sidebarDepth: 2,
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
						sidebarDepth: 2,
						children: [
							['/zh/CV/shushuren', '术术人'],
						]
					},
					{
						title: '电子、计算机、控制',
						path: '/zh/CV/content',
						collapsable: true,
						sidebarDepth: 2,
						children: [
							['/zh/CV/content', 'Alex学长'],
							['/zh/CV/shijiediyichihuo', '世界第一吃货殿下']
						]
					},
					{
						title: '土木',
						path: '/zh/CV/content',
						collapsable: true,
						sidebarDepth: 2,
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
						sidebarDepth: 2,
						children: [
							['/zh/CV/shandong', '山东大葱葱'],
							['/zh/CV/jiujing', '酒精泡芙'],
						]
					},
					{
						title: '生化环材',
						path: '/zh/CV/content',
						collapsable: true,
						sidebarDepth: 2,
						children: [
							['/zh/CV/shelly', 'Shelly 学姐'],
						]
					},
				]
			}
		}
	}
}
