const Router = require('koa-router');

const router = new Router();

router.get('/', async ctx => {
	return ctx.render('index')
});

module.exports = router;
