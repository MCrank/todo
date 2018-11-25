import $ from 'jquery';

const addNewTaskEvent = () => {
  $('#newTaskInput').on('keypress', (evt) => {
    evt.preventDefault();
  });
};

export default { addNewTaskEvent };
