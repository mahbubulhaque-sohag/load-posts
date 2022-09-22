import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPoast></LoadPoast> 
      <District name='Noakhali' speciality='bivag'></District>
      <District name='B.Bariya' speciality='joddha'></District>
      <District name='Sumilla' speciality='Moyna Moti'></District>
    </div>
  );
}

function LoadPoast() {
  const[posts, setPosts] = useState([]);
  
  useEffect( ()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  } , [])
  return(
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post
           title={post.title} 
           body={post.body}
           key={post.id}
           ></Post>)
       
      }
    </div>
  )  
}

function Post(props) {
  return(
    <div style={{color:'blue'}}>
      <h2>post: {props.title}</h2>
      <p>{props.body}</p>
    </div>
  )
}

function District(props) {
    const[power, setPower] = useState(1);
    const boostPower = () => {
      const newPower = power * 2;
      setPower(newPower);
    }
  return(
    <div className='district'>
      <h2>Name:{props.name}</h2>
      <h4>Power:{power}</h4>
      <p>Speciality: {props.speciality}</p>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}

export default App;
