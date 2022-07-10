import React, { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'
import useSound from 'use-sound'

export default function Lightbulb() {
  const [on] = useSound('/static/audio/on.mp3')
  const [off] = useSound('/static/audio/off.mp3')
  const [, setMounted] = useState<boolean>(false)
  const { resolvedTheme, setTheme } = useTheme()

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

      <div
        className='bulb cursor-pointer'
        onClick={() => {
          if (resolvedTheme === 'dark') {
            on()
          } else {
            off()
          }
          setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
        }}
      >
        <div className='zig'></div>
        <div className='zig'></div>
        <div className='zig'></div>
      </div>
    </div>
  )
}
