import GoogleMapsClient from "@google/maps";
import FirebaseAdmin from "firebase-admin";

export default () => ({
  googleMapsClient: GoogleMapsClient.createClient({
    key: process.env.GCP_API_KEY,
    Promise: Promise,
  }),
  initFirebase: () =>
    FirebaseAdmin.initializeApp({
      credential: FirebaseAdmin.credential.cert(
        JSON.parse(process.env.FIREBASE_ADMIN_CONFIG)
      ),
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    }),
});
