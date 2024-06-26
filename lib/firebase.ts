import admin from 'firebase-admin';
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE as string)
    ),
  });
}

const firebase = admin.firestore();
export {firebase};
