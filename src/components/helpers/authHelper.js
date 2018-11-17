import firebase from 'firebase/app';
import 'firebase/auth';

import $ from 'jquery';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user.displayName);
      $('#nav-login').hide();
      $('#nav-logout').show();
    } else {
      $('#nav-login').show();
      $('#nav-logout').hide();
    }
  });
};

export default { checkLoginStatus };