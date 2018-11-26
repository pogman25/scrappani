const Router = require('koa-router');
const fs = require('fs');
const views = require('koa-views');

const router = new Router();

router.get('*', async ctx => {
	return ctx.render('index')
});

module.exports = router;
