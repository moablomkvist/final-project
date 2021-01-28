import React from 'react'
import styled from 'styled-components'


export const Ruler = () => {
  return (
  <rulerWrapper>
    <centimeterList></centimeterList>
    <centimeterList></centimeterList>
    <centimeterList></centimeterList>
    <centimeterList></centimeterList>
    <centimeterList></centimeterList>
    <centimeterList></centimeterList>
    <centimeterList></centimeterList>
    <centimeterList></centimeterList>
    <centimeterList></centimeterList>
    <centimeterList></centimeterList>
    <centimeterList></centimeterList>
    <centimeterList></centimeterList>
    <centimeterList></centimeterList>
    <centimeterList></centimeterList>
    <centimeterList></centimeterList>
    <centimeterList></centimeterList>
    <centimeterList></centimeterList>
    <centimeterList></centimeterList>
    <centimeterList></centimeterList>
    <centimeterList></centimeterList>
  </rulerWrapper>
  )

}



const rulerWrapper = styled.ol `
  counter-reset: marker;
  list-style-type: none;
`
const centimeterList = styled.li `
  list-style-type: none;
  height: 1cm;
  border-top: 1px solid #000;
  box-sizing: border-box;
  width: 2.5em;
  counter-increment: marker;
  position: relative;
  border-left: 2px solid #000;
    &:first-child{
      width: 5em;
    }
    first-child:after{
      position: absolute;
      top: -0.5em;
      left: 100%;
      height: 1em;
      line-height: 1em;
      width: 2em;
      text-align: center;
      content: counter(marker);
    }
    &:nth-child(5n){
      width: 5em;
    }
    &:last-child{
      height: 0;
    }
    &:first-child:after{
      position: absolute;
      top: -0.5em;
      left: 100%;
      height: 1em;
      line-height: 1em;
      width: 2em;
      text-align: center;
      content: counter(marker);
    }
    &:nth-child(5n):after {
      position: absolute;
      top: -0.5em;
      left: 100%;
      height: 1em;
      line-height: 1em;
      width: 2em;
      text-align: center;
      content: counter(marker);
    }
`

