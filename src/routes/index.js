const Router = require('koa-router');

const router = new Router();

router.get('/', async ctx => {
	return ctx.render('home/index', {
		title: 'Scrappani',
		homeBannerTitle: 'Scrappani',
		homeBannerSubtitle: 'Изделия ручной работы',
		phone: '+7-960-477-789-4',
		email: 'scrappani@yandex.ru',
	});
});

router.get('/about', async ctx => {
	return ctx.render('about/index', {
		title: 'Обо мне - Scrappani',
		phone: '+7-960-477-789-4',
		email: 'scrappani@yandex.ru',
	});
});

router.get('/works', async ctx => {
	return ctx.render('works/index', {
		title: 'Мои работы - Scrappani',
		phone: '+7-960-477-789-4',
		email: 'scrappani@yandex.ru',
	});
});

router.get('/contacts', async ctx => {
	return ctx.render('contacts/index', {
		title: 'Контакты - Scrappani',
		phone: '+7-960-477-789-4',
		email: 'scrappani@yandex.ru',
	});
});

router.get('*', async ctx => {
	return ctx.render('error/index');
});

module.exports = router;
