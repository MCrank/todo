import $ from 'jquery';
import taskData from '../helpers/data/taskData';

const printTasks = () => {
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
  newDomString += `
  <tbody>
    <tr class="">
      <th scope="row">1</th>
      <td>Walk the dog</td>
      <td class="text-center"><input type="checkbox" name="completed" id="complete-chk" /></td>
      <td></td>
    </tr>
    <tr class="">
      <th scope="row">2</th>
      <td>Walk the dog</td>
      <td class="text-center"><input type="checkbox" name="completed" id="complete-chk" /></td>
      <td></td>
    </tr>
  </tbody>
  `;

  newDomString += `
  </table>
  `;

  $('#task-table').html(newDomString);
};

const taskPage = () => {
  taskData
    .getAllTasks()
    .then((taskArray) => {
      printTasks(taskArray);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default { printTasks, taskPage };
