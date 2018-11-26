import $ from 'jquery';
import taskData from '../helpers/Data/taskData';
import addEditTask from '../AddEditTask/addEditTask';
import './tasks.scss';

// Starting to wish I had broke this out into two functions for completed and not complated tasks
//  May refactor later into two
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
          <td class="d-flex justify-content-around">
            <i class="edit-task fas fa-edit fa-lg text-success" style="cursor: pointer; ${
  isCompleted === 'true' ? 'display:none;' : ''
}"></i>
            <i class="delete-task fas fa-trash-alt fa-lg text-danger" style="cursor: pointer;"></i>
          </td>
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
      $('#active-task-table').html('');
      $('#closed-task-table').html('');
      taskPage();
    })
    .catch((error) => {
      console.error(error);
    });
};

const editTask = (evt) => {
  if (evt.key === 'Enter') {
    const taskId = evt.target.dataset.taskid;
    const newTaskobject = {
      task: evt.target.value,
      isCompleted: false,
    };
    taskData
      .updateTask(newTaskobject, taskId)
      .then(() => {
        $('#active-task-table').html('');
        $('#closed-task-table').html('');
        $('#new-task-input').html('');
        taskPage();
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

const deleteTask = (evt) => {
  const updateTaskId = $(evt.target).closest('tr')[0].dataset.taskid;
  taskData
    .deleteTask(updateTaskId)
    .then(() => {
      $('#active-task-table').html('');
      $('#closed-task-table').html('');
      taskPage();
    })
    .catch((error) => {
      console.error(error);
    });
};

const editTaskInput = (evt) => {
  $('#new-task-input').html('');
  const editTaskId = $(evt.target).closest('tr')[0].dataset.taskid;
  addEditTask.editTaskBuilder(evt, editTaskId);
};

const bindEvents = () => {
  $('body').on('keypress', '#newTaskInput', addNewTask);
  $('body').on('keypress', '#editTaskInput', editTask);
  $('body').on('change', '.complete-chk', completeTask);
  $('body').on('click', '.edit-task', editTaskInput);
  $('body').on('click', '.delete-task', deleteTask);
};

const initTaskPage = () => {
  taskPage();
  bindEvents();
};
export default { initTaskPage };
