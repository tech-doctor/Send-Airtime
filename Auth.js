var firebaseConfig = {
    apiKey: "AIzaSyDDYf_lwNGEedfBZEZvkFe6FlHYGdOhoS8",
    authDomain: "disburse-81387.firebaseapp.com",
    projectId: "disburse-81387",
    appId: "1:159009687846:web:29daad92b819b263d7d9e7",
    measurementId: "G-Z1NSE9JET0"
  };

  firebase.initializeApp(firebaseConfig);

  const app = firebase.app()
  console.log(app)
  const auth = firebase.auth();
  console.log(auth)
  const db = firebase.firestore();
 console.log(db)

 //update firestore settings 
  db.settings({ timestampsInSnapshots: true});



  /// update/manage users progile form the firebase DOCS (Sample > web > Manage Users)


