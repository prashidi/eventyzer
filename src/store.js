import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const firebaseConfig = {
  apiKey: "AIzaSyCoU34M5PrVEFZH6Aowt9uCpua8ymUskD8",
  authDomain: "stam-8119d.firebaseapp.com",
  databaseURL: "https://stam-8119d.firebaseio.com",
  projectId: "stam-8119d",
  storageBucket: "stam-8119d.appspot.com",
  messagingSenderId: "617371861649",
  appId: "1:617371861649:web:34098ae76890b36b"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

firebase.initializeApp(firebaseConfig);

// const firestore = firebase.firestore();
// const settings = { timestampsInSnapshots: true };
// firestore.settings(settings);

const createStoreWithFirebase = compose(
  reduxFirestore(firebase),
  reactReduxFirebase(firebase, rrfConfig)
)(createStore);

// Add firebase and firestore to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// Create store with reducers and initial state
const initialState = {};
const middleware = [thunk];

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  composeWithDevTools(
    reactReduxFirebase(firebase),
    applyMiddleware(...middleware)
  )
);

export default store;
