import {useState , useEffect} from 'react'
import './App.scss';
import MarkupPerson from './markupPerson';

function App() {
  
  const [persons,setPersons] = useState([]);

  const getData = async function(){
    const res = await fetch('https://api.github.com/users');
    const users = await res.json();
    setPersons(users);
    //console.log(users);
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div className="container">
      <h1 className="heading">Rendering github user from API</h1>
      <div className="persons">
        {
          persons.map( (user,i)=>{
              return (
                <MarkupPerson
                  key = {i}
                  image = {user.avatar_url}
                  name = {user.login}
                  link = { user.html_url}
                />
              )
          })
        }
      </div>
           
    </div>
  );
}

export default App;
