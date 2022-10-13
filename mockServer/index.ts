import { createServer } from "@mswjs/http-middleware";

import { handlers } from "./handlers";

// This configures a request mocking server with the given request handlers.
const app = createServer(...handlers);
app.listen(9090, () =>
  console.log("Mock server ready at http://localhost:9090")
);
