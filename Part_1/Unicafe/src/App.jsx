import { useState } from 'react'

const Title = ({title}) => { return <h1>{title}</h1> }

const Button = ({text, handleClick}) => {
  return <button onClick={handleClick}>{text}</button>
}

const StatisticLine = ({text, counter}) => {
  return(
    <tr>
      <th>{text}</th>
      <td>{counter}</td>
    </tr>
  )
}

const Statistics = ({counters}) => {
  if (counters[3] === 0) {
    return(
    <div>
      <Title title="Feedback Statistics"/>
      <p>No feedback given yet...</p>
    </div>
    )
  }

  return(
    <div>
      <Title title="Feedback Statistics"/>
      <table>
        <tbody>
          <StatisticLine text="Good!" counter={counters[0]}/>
          <StatisticLine text="Neutral" counter={counters[1]}/>
          <StatisticLine text="Bad :(" counter={counters[2]}/>
          <StatisticLine text="All" counter={counters[3]}/>
          <StatisticLine text="Average" counter={counters[4]}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)

  const GoodFeedback = () => {
    const updGood = good + 1
    const updAll = updGood + neutral + bad
    setGood(updGood)
    setAll(updAll)
    setAvg((updGood - bad)/updAll)
  }
  const NeutralFeedback = () => {
    const updNeutral = neutral + 1
    const updAll = good + updNeutral + bad
    setNeutral(updNeutral)
    setAll(updAll)
    setAvg((good - bad)/updAll)
  }
  const BadFeedback = () => {
    const updBad = bad + 1
    const updAll = good + neutral + updBad
    setBad(updBad)
    setAll(updAll)
    setAvg((good - updBad)/updAll)
  }

  return (
    <div>
      <Title title="Give Feedback"/>
      <Button text="Good!" handleClick={GoodFeedback}/>
      <Button text="Neutral" handleClick={NeutralFeedback}/>
      <Button text="Bad :(" handleClick={BadFeedback}/>
      <Statistics counters={[good, neutral, bad, all, avg]}/>
    </div>
  )
}

export default App