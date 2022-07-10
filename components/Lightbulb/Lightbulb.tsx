import React, { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'
import useSound from 'use-sound'

export default function Lightbulb() {
  const [on] = useSound('/static/audio/on.mp3')
  const [off] = useSound('/static/audio/off.mp3')
  const [destroy] = useSound('/static/audio/break.mp3')
  const [, setMounted] = useState<boolean>(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [clicks, setClicks] = useState<number>(0)
  const [broken, setBroken] = useState<boolean>(false)
  const [clickedFirstTime, setClickedFirstTime] = useState<boolean>(true)

  const handleClick = () => {
    if (clickedFirstTime) {
      setClicks(1)
      setClickedFirstTime(false)
    } else {
      setClicks(clicks + 1)
    }
  }

  // setfirstclicked to false after 10 seconds
  useEffect(() => {
    setTimeout(() => {
      setClickedFirstTime(true)
    }, 10000)
    if (clicks > 10) {
      destroy()
      setBroken(true)
      setTheme('dark')
    }
  }, [clickedFirstTime, clicks, destroy, setTheme])

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <div className='area'>
      <div className='wire'></div>
      <div className='fixture'>
        <div className='strip'></div>
        <div className='strip'></div>
        <div className='strip'></div>
      </div>

      {!broken && (
        <div
          className='bulb cursor-pointer'
          onClick={() => {
            if (resolvedTheme === 'dark') {
              on()
            } else {
              off()
            }
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            handleClick()
          }}
        >
          <div className='zig'></div>
          <div className='zig'></div>
          <div className='zig'></div>
        </div>
      )}
    </div>
  )
}
