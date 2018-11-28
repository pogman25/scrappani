const Router = require('koa-router');

const router = new Router();

router.get('/', async ctx => {
	return ctx.render('home/index', {
		title: 'Scrappani',
		homeBannerTitle: 'Scrappani - скрапбукинг своими руками'
	})
});

module.exports = router;
