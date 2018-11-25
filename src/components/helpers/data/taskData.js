import axios from 'axios';
import apiKeys from '../../../../db/apiKeys.json';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getAllTasks = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/tasks.json`)
    .then((results) => {
      const taskObj = results.data;
      const taskArray = [];
      if (taskObj !== null) {
        Object.keys(taskObj).forEach((taskId) => {
          taskObj[taskId].id = taskId;
          taskArray.push(taskObj[taskId]);
        });
      }
      resolve(taskArray);
    })
    .catch((error) => {
      console.error(error);
      reject(error);
    });
});

export default { getAllTasks };
