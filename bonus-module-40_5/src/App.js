import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useEffect, useState } from 'react';
import MealFinder from './components/MealFinder/MealFinder';
import SearchMeal from './components/SearchMeal/SearchMeal';

function App() {
  const[likeColor, setLikeColor] = useState('');
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [randomUser, setRandomUser] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))


    //single user
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => setSingleUser(data))


    //random users
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => setRandomUser(data.results[0]))
  }, []);

  const handleLike = () => {
    const like = likeColor ? '' :'primary';
    setLikeColor(like);
  }
  return (
    <div className="App">
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThumbUpIcon onClick={handleLike} color= {likeColor}></ThumbUpIcon>
      {
        users?.map(user => <li>{user.name}</li>)
      }
      <h1>Name: {singleUser.name}</h1>
      <h2>Random Gender: {randomUser.name?.first}</h2>
      <MealFinder></MealFinder>
      <SearchMeal></SearchMeal>
    </div>
  );
}

export default App;
