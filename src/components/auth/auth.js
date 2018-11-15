import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

import './auth.scss';

const authEvents = () => {
  $('#nav-login').on('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  });
};

export default { authEvents };
