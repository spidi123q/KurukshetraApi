import { TypegooseModule } from "nestjs-typegoose";
import FirebaseAdmin from "firebase-admin";
import { logger } from "./logger";

export const MongooseConnectModule = () => {
  return TypegooseModule.forRoot(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
};

export const initFirebase = () => FirebaseAdmin.initializeApp({
  credential: FirebaseAdmin.credential.cert(JSON.parse(process.env.FIREBASE_ADMIN_CONFIG)),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET
});;

/** Common Settings which can be used throughout the app */
export const commonSettings = {
  KEY: "Value"
};
