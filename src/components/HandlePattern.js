import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from "moment";

import { patternReducer } from '../reducers/patternReducer'
import { PatternCard } from 'styling/lib/PatternCard';
import { PatternName } from 'styling/lib/PatternCard';
import { PatternImage } from 'styling/lib/PatternCard';
import { PatternDetails } from 'styling/lib/PatternCard';

export const HandlePattern = () => {
  const dispatch = useDispatch(); //store all the patterns
  const patterns = useSelector((store) => store.patternReducer.all)

    const PATTERNS_URL = 'http://localhost:8081/patterns';

    useEffect(() => { 
      fetch(PATTERNS_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json '},
      })
        .then((res) => res.json())
        .then((json) => dispatch(patternReducer.actions.setPatterns(json))); //how to store the patterns in Redux store. 
      }, [dispatch]); //for not continuously updating. Gets depending on this variable.  

      return (
        <section id='test'>
        {patterns.map((pattern) => (
          <PatternCard key={pattern._id} createdAt={pattern.createdAt}>
            <PatternName>{pattern.post}</PatternName>
            <a href={pattern.source} alt="pattern description">
              <PatternImage src={pattern.imageSource} alt="pattern image"/>
            </a>

            <PatternDetails>{pattern.yarn}</PatternDetails>
            <PatternDetails>{pattern.needles}</PatternDetails>
            <PatternDetails>{pattern.createdAt}</PatternDetails>
          </PatternCard>
        ))}
        </section>
      );
    
}