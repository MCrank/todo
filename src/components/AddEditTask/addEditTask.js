import $ from 'jquery';
import 'bootstrap';
import './addEditTask.scss';

const addTaskBuilder = () => {
  const newTaskInput = `
    <form>
      <div class="form-group w-100">
        <label for="newTaskInput">Task Name</label>
        <input type="text" class="form-control w-100" id="newTaskInput" placeholder="Enter new task name" autofocus/>
      </div>
    </form>
    `;
  $('#new-task-input').html(newTaskInput);
};

const editTaskBuilder = (evt, taskId) => {
  const editTaskName = $(evt.target)
    .closest('tr')
    .find('th')[0].innerHTML;
  console.log(editTaskName);
  console.log(taskId);
  const editTaskInput = `
    <form>
      <div class="form-group w-100">
        <label for="editTaskInput">Task Name</label>
        <input type="text" class="form-control w-100" id="editTaskInput" data-taskId="${taskId}" value="${editTaskName}" autofocus/>
      </div>
    </form>
    `;
  $('#new-task-input').html(editTaskInput);
};

export default { addTaskBuilder, editTaskBuilder };
