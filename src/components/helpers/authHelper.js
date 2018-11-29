import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';
import auth from '../Auth/auth';

const checkLoginStatus = (initTaskPage) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#login-buttons').html('');
      $('#nav-logout').show();
      $('#nav-add-task').show();
      initTaskPage();
    } else {
      $('#nav-logout').hide();
      $('#nav-add-task').hide();
      auth.loginPage();
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
