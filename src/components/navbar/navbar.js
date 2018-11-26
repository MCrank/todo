import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';
import 'bootstrap';
import addEditTask from '../AddEditTask/addEditTask';
import './navbar.scss';

const navbarEvents = () => {
  $('#nav-logout').on('click', () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        $('#tasks-container').html('');
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

const addTaskEvent = () => {
  $('#nav-add-task').on('click', () => {
    $('#new-task-input').html('');
    addEditTask.addTaskBuilder();
  });
};

const buildNavbar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><i class="far fa-list-alt fa-lg mr-2"></i>ToDo's</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a id="nav-add-task" class="nav-link" href="#"><i class="fas fa-plus-square fa-lg mx-1"></i>Add Task</a>
        </li>
        <li class="nav-item">
          <a id="nav-login" class="nav-link" href="#"><i class="fas fa-sign-in-alt fa-lg mx-1"></i>Login</a>
        </li>
        <li class="nav-item">
          <a id="nav-logout" class="nav-link" href="#"><i class="fas fa-sign-out-alt fa-lg mx-1"></i>Logout</a>
        </li>
      </ul>
    </div>
  </nav>
  `;
  $('#nav-bar').html(domString);
  navbarEvents();
};

export default { buildNavbar, addTaskEvent };
