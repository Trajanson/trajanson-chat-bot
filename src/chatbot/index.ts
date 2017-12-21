import * as builder from "botbuilder";
import { ChatConnector } from "botbuilder";

exports.injectBot = (connector: ChatConnector) => {
  const bot = new builder.UniversalBot(connector, (session) => {
    session.send("Hi from new order");
  });
};