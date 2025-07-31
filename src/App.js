import React from 'react'
import ConsoleLog from './components/ConsoleLog'
import TimerCount from './components/TimerCount'
import IntervelCount from './components/IntervalCount'
import WindowResize from './components/WindowResize'
import SocialMediaButton from './components/SocialMediaButtons'

const App = () => {
  return (
    <div>
      <ConsoleLog />
      <TimerCount />
      <IntervelCount />
      <WindowResize />
      <SocialMediaButton />
    </div>
  )
}

export default App
