let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属

export default {
	path: '/VCharts',
	name: 'VCharts',
	component: layout,
	redirect: {
		name: "VCharts-histogram-base"
	},
	meta: {
		title: '数据可视化',
		icon: 'e622',
	},
	children: [
		{
			path: 'histogram',
			name: "VCharts-histogram",
			component: blank,//() => import(/* webpackChunkName: "VCharts-histogram" */"@/views/VCharts/histogram.vue"),
			redirect: {
				name: "VCharts-histogram-base"
			},
			meta: {
				title: '柱状图',
				icon: 'e67a',
			},
			children: [
				{
					path: 'base',
					name: "VCharts-histogram-base",
					meta: {
						title: '基础',
						icon: 'e67a',
					},
					component: () => import(/* webpackChunkName: "VCharts-histogram-base" */"@/views/VCharts/histogram/base.vue"),
				},
				{
					path: 'metrics',
					name: "VCharts-histogram-metrics",
					meta: {
						title: '设置显示的指标维度',
						icon: 'e67a',
					},
					component: () => import(/* webpackChunkName: "VCharts-histogram-metrics" */"@/views/VCharts/histogram/metrics.vue"),
				},
				{
					path: 'axisSite',
					name: "VCharts-histogram-axisSite",
					meta: {
						title: '设置左右y轴',
						icon: 'e67a',
					},
					component: () => import(/* webpackChunkName: "VCharts-histogram-axisSite" */"@/views/VCharts/histogram/axisSite.vue"),
				},
				// {
				// 	path: 'xdeg',
				// 	name: "VCharts-histogram-xdeg",
				// 	meta: {
				// 		title: '设置x轴刻度的倾斜',
				// 		icon: 'e67a',
				// 	},
				// 	component: () => import(/* webpackChunkName: "VCharts-histogram-xdeg" */"@/views/VCharts/histogram/xdeg.vue"),
				// },
				{
					path: 'stack',
					name: "VCharts-histogram-stack",
					meta: {
						title: '堆叠面积图',
						icon: 'e67a',
					},
					component: () => import(/* webpackChunkName: "VCharts-histogram-stack" */"@/views/VCharts/histogram/stack.vue"),
				},
				{
					path: 'alias',
					name: "VCharts-histogram-alias",
					meta: {
						title: '设置别名',
						icon: 'e67a',
					},
					component: () => import(/* webpackChunkName: "VCharts-histogram-alias" */"@/views/VCharts/histogram/alias.vue"),
				},
				{
					path: 'shouNum',
					name: "VCharts-histogram-shouNum",
					meta: {
						title: '在柱状图上显示指标数值',
						icon: 'e67a',
					},
					component: () => import(/* webpackChunkName: "VCharts-histogram-shouNum" */"@/views/VCharts/histogram/shouNum.vue"),
				},
				{
					path: 'xAxisTyp',
					name: "VCharts-histogram-xAxisTyp",
					meta: {
						title: '设置X轴为连续的数值轴',
						icon: 'e67a',
					},
					component: () => import(/* webpackChunkName: "VCharts-histogram-xAxisTyp" */"@/views/VCharts/histogram/xAxisTyp.vue"),
				},
				{
					path: 'addLine',
					name: "VCharts-histogram-addLine",
					meta: {
						title: '柱状图+折线图',
						icon: 'e67a',
					},
					component: () => import(/* webpackChunkName: "VCharts-histogram-addLine" */"@/views/VCharts/histogram/addLine.vue"),
				},
				{
					path: 'fn',
					name: "VCharts-histogram-fn",
					meta: {
						title: '图表生命钩子函数',
						icon: 'e67a',
					},
					component: () => import(/* webpackChunkName: "VCharts-histogram-fn" */"@/views/VCharts/histogram/fn.vue"),
				},
				{
					path: 'extend',
					name: "VCharts-histogram-extend",
					meta: {
						title: 'extend',
						icon: 'e67a',
					},
					component: () => import(/* webpackChunkName: "VCharts-histogram-extend" */"@/views/VCharts/histogram/extend.vue"),
				},
				{
					path: 'self',
					name: "VCharts-histogram-self",
					meta: {
						title: '自定义配置',
						icon: 'e67a',
					},
					component: () => import(/* webpackChunkName: "VCharts-histogram-self" */"@/views/VCharts/histogram/self.vue"),
				},
				{
					path: 'other',
					name: "VCharts-histogram-other",
					component: blank,//() => import(/* webpackChunkName: "VCharts-Pie" */"@/views/VCharts/pie.vue"),
					redirect: {
						name: "VCharts-histogram-other-one"
					},
					meta: {
						title: '其他的',
						icon: 'e63a',
					},
					children: [
						{
							path: 'one',
							name: "VCharts-histogram-other-one",
							meta: {
								title: '同指标不同颜色',
								icon: 'e67a',
							},
							component: () => import(/* webpackChunkName: "VCharts-histogram-other-one" */"@/views/VCharts/histogram/other/one.vue"),
						},
						{
							path: 'two',
							name: "VCharts-histogram-other-two",
							meta: {
								title: '不同指标不同颜色',
								icon: 'e67a',
							},
							component: () => import(/* webpackChunkName: "VCharts-histogram-other-two" */"@/views/VCharts/histogram/other/two.vue"),
						},
						{
							path: 'three',
							name: "VCharts-histogram-other-three",
							meta: {
								title: '图例背景色',
								icon: 'e67a',
							},
							component: () => import(/* webpackChunkName: "VCharts-histogram-other-three" */"@/views/VCharts/histogram/other/three.vue"),
						},
						{
							path: 'four',
							name: "VCharts-histogram-other-four",
							meta: {
								title: '整个图盘的背景色',
								icon: 'e67a',
							},
							component: () => import(/* webpackChunkName: "VCharts-histogram-other-four" */"@/views/VCharts/histogram/other/four.vue"),
						},
						{
							path: 'five',
							name: "VCharts-histogram-other-five",
							meta: {
								title: 'x轴数值倾斜',
								icon: 'e67a',
							},
							component: () => import(/* webpackChunkName: "VCharts-histogram-other-five" */"@/views/VCharts/histogram/other/five.vue"),
						},
						{
							path: 'six',
							name: "VCharts-histogram-other-six",
							meta: {
								title: '不显示y轴第二个指标的网格线',
								icon: 'e67a',
							},
							component: () => import(/* webpackChunkName: "VCharts-histogram-other-six" */"@/views/VCharts/histogram/other/six.vue"),
						},
						{
							path: 'seven',
							name: "VCharts-histogram-other-seven",
							meta: {
								title: 'y轴的最小值与最大值',
								icon: 'e67a',
							},
							component: () => import(/* webpackChunkName: "VCharts-histogram-other-seven" */"@/views/VCharts/histogram/other/seven.vue"),
						},
						{
							path: 'dataZoom',
							name: "VCharts-histogram-other-dataZoom",
							meta: {
								title: "缩放",
								icon: 'e67a',
							},
							component: () => import(/* webpackChunkName: "VCharts-histogram-other-seven" */"@/views/VCharts/histogram/other/dataZoom.vue"),
						},
						{
							path: 'tooltip',
							name: "VCharts-histogram-other-tooltip",
							meta: {
								title: "tooltip",
								icon: 'e67a',
							},
							component: () => import(/* webpackChunkName: "VCharts-histogram-other-seven" */"@/views/VCharts/histogram/other/tooltip.vue"),
						},
					]
				}
			],
		},
		{
			path: 'base',
			name: "VCharts-line",
			component: blank, //() => import(/* webpackChunkName: "VCharts-base" */"@/views/VCharts/line.vue"),
			redirect: {
				name: "VCharts-line-base"
			},
			meta: {
				title: '折线图',
				icon: 'e79a',
			},
			children: [
				{
					path: 'base',
					name: "VCharts-line-base",
					meta: {
						title: '折线-基础',
						icon: 'e67a',
					},
					component: () => import(/* webpackChunkName: "VCharts-line-base" */"@/views/VCharts/line/base.vue"),
				}
			]
		},
		{
			path: 'pie',
			name: "VCharts-pie",
			component: blank,//() => import(/* webpackChunkName: "VCharts-Pie" */"@/views/VCharts/pie.vue"),
			redirect: {
				name: "VCharts-pie-base"
			},
			meta: {
				title: '饼图',
				icon: 'e63a',
			},
			children: [
				{
					path: 'base',
					name: "VCharts-pie-base",
					meta: {
						title: '基础',
						icon: 'e67a',
					},
					component: () => import(/* webpackChunkName: "VCharts-pie-base" */"@/views/VCharts/pie/base.vue"),
				},
				{
					path: 'autoAnimation',
					name: "VCharts-pie-auto-animation",
					meta: {
						title: '饼图自动切换动画',
						icon: 'e67a',
					},
					component: () => import(/* webpackChunkName: "VCharts-pie-auto-animation" */"@/views/VCharts/pie/auto-animation.vue"),
				}
			]
		},
		
	]
}