import React from 'react'
import ConsoleLog from './components/ConsoleLog'
import TimerCount from './components/TimerCount'
import DelayedMessage from './components/DelayedMessage'
import IntervelCount from './components/IntervalCount'
import WindowResize from './components/WindowResize'

const App = () => {
  return (
    <div>
      <ConsoleLog />
      <TimerCount />
      <IntervelCount />
      <DelayedMessage />
      <WindowResize />
    </div>
  )
}

export default App
