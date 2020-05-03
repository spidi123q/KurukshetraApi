import { TypegooseModule } from "nestjs-typegoose";
import FirebaseAdmin from "firebase-admin";
import GoogleMapsClient from "@google/maps";

export const MongooseConnectModule = () => {
  return TypegooseModule.forRoot(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });
};
