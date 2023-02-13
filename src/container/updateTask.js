import { useEffect } from 'react';


const Update = () => {
  const updateTask =  (tasks) => {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/crivera01', {
      method:'PUT',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify([])
    }).then(res => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
  }
  
/*  useEffect(() => {
    updateTask()
  }, []);
*/

}

export default Update;