import React from 'react'
import HomeIcon from './HomeIcon'
import { wallpapers } from '../assets/db/data'
const Desktop = () => {
  const myStyle = {
    backgroundImage: `url('${wallpapers[1]}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 'inherate',
  }
  return (
    <>
      <div style={myStyle} className="h-[100vh]">
        <HomeIcon />
        {/* <img src="" alt="" /> */}
      </div>
    </>
  )
}

export default Desktop