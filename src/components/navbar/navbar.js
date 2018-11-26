import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';
import 'bootstrap';
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
    const newTaskInput = `
    <form>
      <div class="form-group w-100">
        <label for="newTaskInput">Task Name</label>
        <input type="text" class="form-control w-100" id="newTaskInput" placeholder="Enter new task name" autofocus/>
        <span
          style="opacity: 1; left: 428px; top: 141.5px; width: 19px; min-width: 19px; height: 13px; position: absolute; background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB3aWR0aD0nMTcnIGhlaWdodD0nMTInIHZpZXdCb3g9JzAgMCAxNyAxMic+IDxkZWZzPiA8cGF0aCBpZD0nYScgZD0nTTcuOTA5IDEuNDYybDIuMTIxLjg2NHMtLjY3MS4xMy0xLjIwOS4yOTRjMCAwIC40MzcuNjM0Ljc3LjkzOC4zOTEtLjE4LjY1Ny0uMjQ4LjY1Ny0uMjQ4LS44MTEgMS42NjgtMi45NzkgMi43MDMtNC41MyAyLjcwMy0uMDkzIDAtLjQ4Mi0uMDA2LS43MjcuMDE1LS40MzUuMDIxLS41ODEuMzgtLjM3NC40NzMuMzczLjIwMSAxLjE0My42NjIuOTU4IDEuMDA5QzUuMiA4LjAwMy45OTkgMTEgLjk5OSAxMWwuNjQ4Ljg4Nkw2LjEyOSA4LjYzQzguNjAyIDYuOTQ4IDEyLjAwNiA2IDE1IDZoM1Y1aC00LjAwMWMtMS4wNTggMC0yLjA0LjEyMi0yLjQ3My0uMDItLjQwMi0uMTMzLS41MDItLjY3OS0uNDU1LTEuMDM1YTcuODcgNy44NyAwIDAgMSAuMTg3LS43MjljLjAyOC0uMDk5LjA0Ni0uMDc3LjE1NS0uMDk5LjU0LS4xMTIuNzc3LS4wOTUuODIxLS4xNi4xNDYtLjI0NS4yNTQtLjk3NC4yNTQtLjk3NEw3LjU2OS4zODlzLjIwMiAxLjAxMy4zNCAxLjA3M3onLz4gPC9kZWZzPiA8dXNlIGZpbGw9JyMwMDdDOTcnIGZpbGwtcnVsZT0nZXZlbm9kZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTEpJyB4bGluazpocmVmPScjYScvPiA8L3N2Zz4=&quot;); background-repeat: no-repeat; background-position: 0px 0px; border: none; display: inline; visibility: visible; z-index: auto;"
        ></span>
      </div>
    </form>
    `;
    $('#new-task-input').html(newTaskInput);
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
          <a id="nav-add-task" class="nav-link" href="#"><i class="far fa-plus-square fa-lg mx-1"></i>Add Task</a>
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
