import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { patternReducer } from '../reducers/patternReducer'

export const HandlePattern = () => {
  const dispatch = useDispatch(); //store all the patterns
  const patterns = useSelector((store) => store.reducer.all)

    const PATTERNS_URL = 'http://localhost:8081/patterns';

    useEffect(() => { 
      fetch(PATTERNS_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json '},
      })
        .then((res) => res.json())
        .then((json) => dispatch(patternReducer.actions.setPatterns(json.res))); //how to store the patterns in Redux store. 
      }, [dispatch]); //for not continuously updating. Gets depending on this variable.  


      return (
        <section>
        {patterns.map((pattern) => (
          <div key={pattern._id}>
            <li>{pattern.pattern}</li>
          </div>
        ))}
        </section>
      );
    
}