import React from 'react'
import ConsoleLog from './components/ConsoleLog'
import TimerCount from './components/TimerCount'
import IntervelCount from './components/IntervalCount'
import WindowResize from './components/WindowResize'
import SampleData from './components/SampleData'

const App = () => {
  return (
    <div>
      <ConsoleLog />
      <TimerCount />
      <IntervelCount />
      <WindowResize />
      <SampleData />
    </div>
  )
}

export default App
