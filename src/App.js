import {useState , useEffect} from 'react'
import './App.scss';
import {Person} from './markupPerson';
import CardView from './markUpCard';

function App() {
  
  const [persons,setPersons] = useState([]);
  const [getMarkup,setGetMarkup] = useState(false);

  const getData = async function(){
    const res = await fetch('https://api.github.com/users');
    const users = await res.json();
    setPersons(users);
    //console.log(users);
  }

  const showBox = function(){
      setGetMarkup(true);
  }

  const showCard = function(){
    setGetMarkup(false);
}

  useEffect(()=>{
    getData();
  },[])

  return (
    <div className="container">
      <h1 className="heading">Rendering github user from API</h1>
      <div className="d-flex">
        <button className="btn-top" onClick={showBox}>Show box</button>
        <button className="btn-top" onClick={showCard}>Show Card</button>
      </div>
      
      {
        getMarkup ? (
          <div className="persons">
          {
            persons.map( (user,i)=>{
                return (
                  <Person
                    key = {i}
                    image = {user.avatar_url}
                    name = {user.login}
                    link = { user.html_url}
                  >
                    Hello there
                  </Person>
                )
            })
          }
        </div>
        ) : <div className="persons">
          {
            persons.map( (user,i)=>{
              return (
                <CardView
                key = {i}
                image = {user.avatar_url}
                name = {user.login}
                link = { user.html_url}
                />
              )
            })
          }
      </div>

      }
    </div>
  );
}

export default App;
