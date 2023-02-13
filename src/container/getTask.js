import { useEffect } from 'react';


const Get = () => {
  const getTask = () => {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/crivera01')
    .then(res => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    getTask()

  }, []);


}

export default Get;
