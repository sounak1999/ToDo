

  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp(
      {
        
            apiKey: "AIzaSyCjzMQGwAZ6iRfUWivSVoa8grIkzWRPvIY",
            authDomain: "todo-app-cp-15ce2.firebaseapp.com",
            databaseURL: "https://todo-app-cp-15ce2.firebaseio.com",
            projectId: "todo-app-cp-15ce2",
            storageBucket: "todo-app-cp-15ce2.appspot.com",
            messagingSenderId: "126809593986",
            appId: "1:126809593986:web:7d51a837fe4f697e7efc9b",
            measurementId: "G-BYMNT664NZ"
         
        
      }
  );

  const db = firebaseApp.firestore(); 


  export default db ;