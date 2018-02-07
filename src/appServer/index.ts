import * as express from "express";
import * as errorHandler from "errorhandler";
import * as mongoose from "mongoose";
import * as bluebird from "bluebird";

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

// Connect to MongoDB
const mongoUrl = (process.env.MONGODB_ENV === "DEV" ? process.env.MONGODB_URI_DEV : process.env.MONGODB_URI_PRODUCTION);
(<any>mongoose).Promise = bluebird;
mongoose.connect(mongoUrl, { useMongoClient: true }).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    process.exit();
});
