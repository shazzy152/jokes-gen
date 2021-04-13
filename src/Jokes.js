import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './Jokes.css';

const Jokes = (props) => {

    const [joke, setJoke] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchRequest = useCallback(() => {
        axios.get('https://api.chucknorris.io/jokes/random',
        {
            params : {
                category : props.category
            }
        })
        .then(res => {
            setLoading(false);
            setJoke(res.data.value)}, error => {
                console.log(error)
              })
    }, [props.category]);

    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/random',
        {
            params : {
                category : props.category
            }
        })
        .then(res => {
            setLoading(false);
            setJoke(res.data.value)}, error => {
                console.log(error)
              })
    },[props.category])

    return (
        <div className="jokes">
            <div className="joke">
                {loading ? (
                    <h4>Select Category</h4>
                ) : (
                    <i>{joke}</i>
                )}
            </div>
            <div className="btn-wrap">
                    <button className="btn" onClick={fetchRequest}>New Joke</button>
            </div>
        </div>
    )
}

export default Jokes
