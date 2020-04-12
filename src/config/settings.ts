import { TypegooseModule } from "nestjs-typegoose";
import config from "../config/config";

const env = process.env.environment || "development";

export const MongooseConnectModule = TypegooseModule.forRoot(
  config[env].mongo.uri,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

export const SwaggerConfig = config[env].swagger;
export const storageBucket = config[env].firebase.storageBucket;

/** Common Settings which can be used throughout the app */
export const commonSettings = {
  KEY: "Value"
};
