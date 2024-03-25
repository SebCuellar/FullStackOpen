import { useState } from 'react'

const Header = (props) => { return <h1>{props.header}</h1> }
const Part = (props) => { return <p>{props.part} {props.exercises}</p>}
const Content = (props) => {
  return(
  <div>
    <Part part={props.parts[0]} exercises={props.exercises[0]}/>
    <Part part={props.parts[1]} exercises={props.exercises[1]}/>
    <Part part={props.parts[2]} exercises={props.exercises[2]}/>
  </div>)
}
const Total = (props) => {
  let sum_exercises = 0
  for (let i = 0; i < props.exercises.length; i++) {
    sum_exercises += props.exercises[i];    
  }
  return <p>Number of exercises {sum_exercises}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header header={course}/>
      <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]}/>
      <Total exercises={[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

export default App