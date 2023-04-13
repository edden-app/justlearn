export const SITE = {
	name: "Just Learn",

	origin: 'https://justlearnindia.in',
	basePathname: '/',
	trailingSlash: false,

	title: "Just Learn India: Next-Gen Learning Platform",
	description: "Unlock the potential of your future with JustLearn. Learn, grow and upskill with the National Award Winning EdTech & SkillTech platform.",

	googleAnalyticsId: "G-DTH4DSGM9S",
	googleSiteVerificationId: false,
};

export const BLOG = {
	disabled: true,
	postsPerPage: 4,

	blog: {
		disabled: true,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: true,
		pathname: '', // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: true,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: true,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
  