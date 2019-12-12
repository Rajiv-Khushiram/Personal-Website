rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
     match /blogs/{blog} {
      allow read;
      allow create;
    }
  }
}
