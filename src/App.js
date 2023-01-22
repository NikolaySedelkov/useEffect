import './App.css';
import { useEffect, useState } from 'react';
import Loading from './component/loading/Loading.js';
import Change from './component/app/Change.js';
import Changed from './component/app/Changed.js';

var users = [];

function App() {
  const [id, setId] = useState()
  const [changedUser, setUser] = useState();
  const [isLoading, setStateLoading]  = useState(true);
  const [isLoadingUser, setStateLoadingUser]  = useState(false);

  const changeUser = id => {
    setStateLoadingUser(true);
    setId(id);
  }

  useEffect(()=>{
      fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json ")
      .then((response) => {
        return response.json().then((data) => {
          setStateLoading(false);
          users = data;
        })
      }
      )
  }, [])

  useEffect(()=>{
    if(id)
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json `)
      .then((response) => {
        return response.json().then((data) => {
          console.log(data);
          setUser(data);
          setStateLoadingUser(false);
        })
      }
      )
  }, [id])

  if(isLoading) return <Loading/>;

  return (
    <div id="app">
      <Change users={users} changeFunc={changeUser}/>
      <div id="right-part">
        {isLoadingUser?<Loading/>:<Changed user={changedUser}/>}
      </div>
    </div>
  );
}

export default App;

