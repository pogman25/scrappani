const Router = require('koa-router');

const router = new Router();

router.get('/', async ctx => {
	return ctx.render('home/index', {
		title: 'Scrappani',
		homeBannerTitle: 'Scrappani',
		homeBannerSubtitle: 'Изделия ручной работы',
		phone: '+7-960-477-789-4',
		email: 'scrappani@yandex.ru',
	})
});

module.exports = router;
