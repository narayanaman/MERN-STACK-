import React from 'react'
import Score from './Score'

function App() {
  return (
    <div className='grid grid-cols-3'>
    <Score team="Team A" location="BDC"/>
    <Score team="Team B" location="BIT"/>
    <Score team="Team C" location="BPC"/>
    </div>
  )
}

export default App