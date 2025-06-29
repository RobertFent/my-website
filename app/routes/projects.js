import { Blog } from '../views/Blog.js';

/**
 * @param {{ app: import("fastify").FastifyInstance, db: import("better-sqlite3").Database }}
 */
export const init = async ({ app, db }) => {
	app.get('/projects', async (_, reply) => {
		return reply.render(Blog);
	});
};
