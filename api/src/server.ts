import Fastify from "fastify";

const startServer = async () => {
    const server = Fastify({
        logger: true,
    });

    try {
        await server.listen({ port: 3000 });
    } catch (error) {
        server.log.error(error);
        process.exit(1);
    }
};

startServer();
