import React from 'react'
import TaskBar from './Component/TaskBar'
import Desktop from './Component/Desktop'

const App = () => {
  return (
    <>
      <div className='overflow-hidden w-full text-white'>
        <Desktop />
        <TaskBar />
      </div>
    </>
  )
}

export default App