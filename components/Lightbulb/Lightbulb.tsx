import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'
import useSound from 'use-sound'

export default function Lightbulb() {
  const [on] = useSound('/static/audio/on.mp3')
  const [off] = useSound('/static/audio/off.mp3')
  const [destroy] = useSound('/static/audio/break.mp3')

  const [mounted, setMounted] = useState<boolean>(false)
  const { resolvedTheme, setTheme } = useTheme()

  const [clicks, setClicks] = useState<number>(0)
  const [broken, setBroken] = useState<boolean>(false)
  const [clickedFirstTime, setClickedFirstTime] = useState<boolean>(true)

  const handleClick = () => {
    if (clickedFirstTime) {
      setClicks(0)
      setClickedFirstTime(false)
    } else {
      setClicks(clicks + 1)
    }
  }

  const handleLightSwitch = () => {
    if (resolvedTheme === 'dark') {
      on()
      setTheme('light')
    } else {
      off()
      setTheme('dark')
    }
    handleClick()
  }

  useEffect(() => {
    setTimeout(() => {
      setClickedFirstTime(true)
    }, 5000)
  }, [])

  useEffect(() => {
    if (clicks > 4) {
      setBroken(true)
      destroy()
      setTheme('dark')
    }
  }, [clicks, destroy, setTheme])

  // We can change the theme after the component has mounted
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

      {!broken && mounted && (
        <div className='bulb cursor-pointer' onClick={handleLightSwitch}>
          <div className='zig'></div>
          <div className='zig'></div>
          <div className='zig'></div>
        </div>
      )}
    </div>
  )
}
