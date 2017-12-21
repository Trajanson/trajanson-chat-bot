import * as builder from "botbuilder";
import { ChatConnector } from "botbuilder";

export const injectBot = (connector: ChatConnector) => {
  const bot = new builder.UniversalBot(connector, (session) => {
    session.send("Hi from new order with extracted server");
  });
};