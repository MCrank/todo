import firebase from 'firebase/app';
import 'firebase/auth';

import $ from 'jquery';

const checkLoginStatus = (initTaskPage) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#nav-login').hide();
      $('#nav-logout').show();
      $('#nav-add-task').show();
      initTaskPage();
    } else {
      $('#nav-login').show();
      $('#nav-logout').hide();
      $('#nav-add-task').hide();
    }
  });
};

// Keeping this for now as I may use it later
const isLoggedIn = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return true;
    }
    return false;
  });
};

export default { checkLoginStatus, isLoggedIn };
