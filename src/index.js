import firebase from 'firebase/app';
import 'bootstrap';

import navbar from './components/navbar/navbar';
import auth from './components/auth/auth';
import authHelper from './components/helpers/authHelper';
import tasks from './components/tasks/tasks';

import apiKeys from '../db/apiKeys.json';
import './index.scss';

const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  navbar.buildNavbar();
  navbar.addTaskEvent();
  auth.authEvents();
  // Check Lgin status and if logged in show the task lists
  authHelper.checkLoginStatus(tasks.initTaskPage);
};

initApp();
