import { app, assert } from 'egg-mock/bootstrap';

describe('test/app/middleware/robot.test.ts', () => {
	it('should block robot', async () => {
		const result = await app.httpRequest().get('/').set('User-Agent', 'Baiduspider').expect(403);
		assert('Go away, robot.' === result.text );
	});
});
