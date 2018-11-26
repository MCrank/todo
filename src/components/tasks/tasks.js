import $ from 'jquery';
import taskData from '../helpers/data/taskData';

const printTasks = (taskArray) => {
  let newDomString = '';
  newDomString = `
  <h1 class="text-center">Active Tasks</h1>
  <table class="table table-striped table-hover">
    <thead class="thead-dark">
      <tr>
        <!-- <th scope="col" style="width: 20%">Task #</th> -->
        <th scope="col" style="width: 80%">Task Description</th>
        <th scope="col" style="width: 5%">Completed</th>
        <th scope="col" style="width: 15%" class="text-center">Edit/Delete</th>
      </tr>
    </thead>
  `;
  if (taskArray.length) {
    taskArray.forEach((task) => {
      newDomString += `
      <tbody>
        <tr data-taskid="${task.id}">
          <th scope="row">${task.task}</th>
          <!-- <td>${task.task}</td> -->
          <td class="text-center"><input type="checkbox" name="completed" id="complete-chk" /></td>
          <td></td>
        </tr>
      </tbody>
      `;
    });
  }
  newDomString += `
  </table>
  `;

  $('#active-task-table').html(newDomString);
};

const taskPage = () => {
  taskData
    .getAllTasks()
    .then((taskArray) => {
      printTasks(taskArray);
    })
    .catch((error) => {
      console.error(error);
    });
};

const addNewTask = (evt) => {
  if (evt.key === 'Enter') {
    const newTaskobject = {
      task: evt.target.value,
      isCompleted: false,
    };
    taskData.createTask(newTaskobject);
    $('#newTaskInput').val('');
    taskPage();
  }
};

const completeTask = (evt) => {
  const updateTaskId = $(evt.target).closest('tr')[0].dataset.taskid;
  const updateTaskName = $(evt.target)
    .closest('tr')
    .find('th')[0].innerHTML;
  const taskObj = {
    task: updateTaskName,
    isCompleted: true,
  };
  taskData.updateTask(taskObj, updateTaskId);
};

const bindEvents = () => {
  $('body').on('keypress', '#newTaskInput', addNewTask);
  $('body').on('change', '#complete-chk', completeTask);
};

const initTaskPage = () => {
  taskPage();
  bindEvents();
};
export default { initTaskPage };
