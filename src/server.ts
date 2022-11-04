import Fastify from "fastify";
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';

import { authRoutes } from "./routes/auth";
import { gameRoutes } from "./routes/game";
import { guessRoutes } from "./routes/guess";
import { poolRoutes } from "./routes/pool";
import { userRoutes } from "./routes/user";

const PORT = process.env.PORT || 3333;

async function start() {
	const fastify = Fastify({
		logger: true
	});

	await fastify.register(cors, {
		origin: true,
	});

	await fastify.register(jwt, {
		secret: 'husfignsignnlwcopasjnpifsngpfnspgnfgn',
	});

	await fastify.register(authRoutes);
	await fastify.register(gameRoutes);
	await fastify.register(guessRoutes);
	await fastify.register(poolRoutes);
	await fastify.register(userRoutes);

	await fastify.listen({ port: Number(PORT), host: '0.0.0.0' });
}

start();