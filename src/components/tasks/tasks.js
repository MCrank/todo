import $ from 'jquery';
import taskData from '../helpers/data/taskData';
import './tasks.scss';

const printTasks = (taskArray, isCompleted) => {
  let newDomString = '';
  newDomString = `
  <h1 class="text-center">${isCompleted === 'true' ? 'Completed Tasks' : 'Active Tasks'}</h1>
  <table class="table table-striped table-hover">
    <thead class="thead-dark">
      <tr>
        <th scope="col" style="width: 80%">Task Description</th>
        <th scope="col" style="width: 5%; ${
  isCompleted === 'true' ? 'display:none;' : ''
}">Completed</th>
        <!-- ${isCompleted ? '' : '<th scope="col" style="width: 5%">Completed</th>'} -->
        <th scope="col" style="width: 15%" class="text-center">Edit/Delete</th>
      </tr>
    </thead>
  `;
  if (taskArray.length) {
    taskArray.forEach((task) => {
      newDomString += `
      <tbody>
        <tr data-taskid="${task.id}">
          <th scope="row" class="${isCompleted === 'true' ? 'completed' : ''}">${task.task}</th>
          <td class="text-center" style="${
  isCompleted === 'true' ? 'display:none;' : ''
}"><input class="complete-chk" type="checkbox" name="completed"/></td>
          <td></td>
        </tr>
      </tbody>
      `;
    });
  }
  newDomString += `
  </table>
  `;
  if (isCompleted === 'true') {
    $('#closed-task-table').html(newDomString);
  } else {
    $('#active-task-table').html(newDomString);
  }
};

const taskPage = () => {
  taskData
    .getFilteredTasks('active')
    .then((taskArray) => {
      printTasks(taskArray, 'false');
    })
    .catch((error) => {
      console.error(error);
    });
  taskData
    .getFilteredTasks()
    .then((taskArray) => {
      printTasks(taskArray, 'true');
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
    taskData
      .createTask(newTaskobject)
      .then(() => {
        $('#newTaskInput').val('');
        taskPage();
      })
      .catch((error) => {
        console.error(error);
      });
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
  taskData
    .updateTask(taskObj, updateTaskId)
    .then(() => {
      console.log('You made a put request');
      $('#active-task-table').html('');
      $('#closed-task-table').html('');
      taskPage();
    })
    .catch((error) => {
      console.error(error);
    });
};

const bindEvents = () => {
  $('body').on('keypress', '#newTaskInput', addNewTask);
  $('body').on('change', '.complete-chk', completeTask);
};

const initTaskPage = () => {
  taskPage();
  bindEvents();
};
export default { initTaskPage };
