import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Jokes from './Jokes.js'
import CategorySelect from './CategorySelect.js';
import Loader from "react-loader-spinner";

function App() {

  const [categoryData, setCategoryData] = useState([])
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      axios.get('https://api.chucknorris.io/jokes/categories')
      .then(res => {
        setLoading(false);
        setCategoryData(res.data)
      }, error => {
        console.log(error)
      })
  },[])

  return (
    <div className="App">
        <nav className="nav">
          <h1>Chuck Norris Jokes</h1>
        </nav>
        <div className="categories">
          { loading ? (
            <Loader
              type="ThreeDots"
              color="#000000"
              height={50}
              width={50}
              timeout={3000} //3 secs
            />
          ) : (
            categoryData.map((cat) => (
              <span 
                className="category"
                onClick = {() => setCategory(cat)}
                >{cat}</span>
            ))
          )}
        </div>
        <div className="CategorySelect">
            <CategorySelect category={category} />
        </div>
        <div class="">
            <Jokes category={category} /> 
        </div>
    </div>
  );
}

export default App;
