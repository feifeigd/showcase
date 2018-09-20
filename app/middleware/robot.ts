
// options = app.config.robot
// 测试 curl http://localhost:7001/news -A "Baiduspider"
module.exports = (options) => {
	return async function robotMiddleware(ctx, next) {
		const source = ctx.get('user-agent') || '';
		const match = options.ua.some((ua) => ua.test(source));
		if (match) {
			ctx.status = 403;
			ctx.message = 'Go away, robot.';
		}else {
			await next();
		}
	};
};
