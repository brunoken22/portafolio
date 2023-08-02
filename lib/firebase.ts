import admin from "firebase-admin";
import firebaseJson from "./firebase.json";
const serviceAccount = JSON.stringify(firebaseJson);

if (!admin.apps.length) {
   admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(serviceAccount)),
   });
}
const firebase = admin.firestore();
export { firebase };
