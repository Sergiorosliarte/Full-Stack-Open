import { useState } from 'react'

const Header = ({ text }) => {
  return (
    <h1>
      {text}
    </h1>
  )
}

const Button = ({ text, handler }) => {
  return (
    <button onClick={handler}>
      {text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ stats }) => {
  const total = () => {
    return stats[0] + stats[1] + stats[2]
  }

  const average = () => {
    return ((stats[0] * 1) + (stats[1] * 0) + (stats[2] * (-1))) / total()
  }

  const positive = () => {
    let value = stats[0] / total() * 100
    return value + ' %'
  }
  if (total() <= 0) {
    return (
      <p>No feedback given</p>
    )
  }
  else return (

    <table>
      <tbody>
        <StatisticLine text='good' value={stats[0]} />
        <StatisticLine text='neutral' value={stats[1]} />
        <StatisticLine text='bad' value={stats[2]} />
        <StatisticLine text='all' value={total()} />
        <StatisticLine text='average' value={average()} />
        <StatisticLine text='positive' value={positive()} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const stats = [good, neutral, bad]
  console.log

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text='give feedback' />
      <Button text='good' handler={handleGoodClick} />
      <Button text='neutral' handler={handleNeutralClick} />
      <Button text='bad' handler={handleBadClick} />
      <Header text='statistics' />
      <Statistics stats={stats} />

    </div>
  )
}

export default App