import $ from 'jquery';
import taskData from '../helpers/data/taskData';

const printTasks = (taskArray) => {
  let newDomString = '';
  newDomString = `
  <h1 class="text-center">Active Tasks</h1>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col" style="width: 10%">Task #</th>
        <th scope="col" style="width: 70%">Task Description</th>
        <th scope="col" style="width: 5%">Completed</th>
        <th scope="col" style="width: 15%">Edit/Delete</th>
      </tr>
    </thead>
  `;
  if (taskArray.length) {
    taskArray.forEach((task) => {
      newDomString += `
      <tbody>
        <tr>
          <th scope="row">${task.id}</th>
          <td>${task.task}</td>
          <td class="text-center"><input type="checkbox" name="completed" id="complete-chk" /></td>
          <td></td>
        </tr>
      </tbody>
      <tbody>
      `;
    });
  }
  newDomString += `
    </tbody>
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

export default { taskPage };
