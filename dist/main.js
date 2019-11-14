"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
require("dotenv/config");
const Express = require("express");
const cors = require("cors");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const vhost = require("vhost");
const serveStatic = require("serve-static");
if (process.env.NODE_ENV === 'test') {
    process.env.MONGO_URI = process.env.MONGO_URI_TEST;
    console.log('----------TESTING IN PROCESS----------');
}
const server = Express();
const marketplace = Express();
const studio = Express();
const simulator = Express();
simulator.use(serveStatic('simulator/dist'));
studio.use(serveStatic('studio/dist'));
server.use(cors());
server.use(vhost('app.chatbots.mn', studio));
server.use(vhost('simulator.chatbots.mn', simulator));
server.use(serveStatic('marketplace/dist'));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(server));
    const options = new swagger_1.DocumentBuilder()
        .setTitle('API for Chatbots.mn')
        .setDescription('API for Chatbots.mn')
        .setVersion('1.0')
        .setSchemes("https", "http")
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT || 5000);
}
bootstrap();
//# sourceMappingURL=main.js.map