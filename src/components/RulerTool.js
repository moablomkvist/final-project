import React from 'react'
import styled from 'styled-components'

export const RulerTool = () => {  
  return (
    <Ruler>
      <Marker>0cm</Marker>
      <Marker></Marker>
      <Marker></Marker>
      <Marker></Marker>
      <Marker></Marker>
      <Marker>5cm</Marker>
      <Marker></Marker>
      <Marker></Marker>
      <Marker></Marker>
      <Marker></Marker>
      <Marker>10cm</Marker>
    </Ruler>
  )
}


const Ruler = styled.ol`
  list-style-type: none;
`
const Marker = styled.li`
  list-style-type: none;
  text-align: center;
  border-top: 1px solid #000;
  color: #000;
  width: 40px;
  border-left: 2px solid #000;
    &:first-child, , &:nth-child(2n){
      height: 1.77cm;
    }
    &:last-child {
      height: 0cm;
    }
    &:first-child::after,
    &:nth-child(5n)::after {
      position: absolute;
      text-align: center;
      width: 40px;
    }
`











