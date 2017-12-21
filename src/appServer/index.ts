import * as express from "express";
import * as errorHandler from "errorhandler";

// Create Express server
export const app = express();

if (process.env.ENV === "DEV") { app.use(errorHandler()); }

/**
 * Start Express server.
 */
const server = app.listen(process.env.PORT, () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), process.env.PORT, process.env.ENV);
    console.log("  Press CTRL-C to stop\n");
  });

app.get("/", (req, res) => {
    res.write("(200)\nSite is operational.");
    res.end();
});
