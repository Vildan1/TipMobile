"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_middleware_1 = require("@mswjs/http-middleware");
const handlers_1 = require("./handlers");
// This configures a request mocking server with the given request handlers.
const app = (0, http_middleware_1.createServer)(...handlers_1.handlers);
app.listen(9090, () => console.log("Mock server ready at http://localhost:9090"));
