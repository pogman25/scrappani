const Koa = require('koa');
const serve = require('koa-static');
const views = require('koa-views');

const indexRoutes = require('./routes/index');

const app = new Koa();

const PORT = process.env.PORT || 8080;

app.use(serve(__dirname + '/public'));

// routes
app
	.use(views(__dirname + '/views', { extension: 'pug' }))
	.use(indexRoutes.routes());

// server
const server = app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
