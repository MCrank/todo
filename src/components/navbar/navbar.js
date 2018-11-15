import $ from 'jquery';
import 'bootstrap';
import './navbar.scss';

const buildNavbar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">ToDo's</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a id="nav-login" class="nav-link" href="#">Login</a>
        </li>
        <li class="nav-item">
          <a id="nav-logout" class="nav-link" href="#">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
  `;
  $('#nav-bar').html(domString);
};

export default { buildNavbar };
