const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Section = (props) => {
  return(
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  let sections = []
  if(props.parts.length != props.exercises.length){
    return
  }

  for(let i = 0; i < props.parts.length; i++){
    sections.push(<Section part={props.parts[i]} exercises={props.exercises[i]}/>)
  }

  return(sections)
}

const Total = (props) => {
  let total = 0;
  for(let i = 0; i < props.exercises.length; i++){
    total = total + props.exercises[i]
  }
  return(
    <p>Number of exercises {total}</p>
  )
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
    <>
      <Header course={course}/>
      <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]}/>
      <Total exercises={[exercises1, exercises2, exercises3]}/>
    </>
  )
}

export default App