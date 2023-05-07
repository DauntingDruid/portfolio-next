import React from 'react'
import { useSpring, animated } from 'react-spring'
import {motion} from 'framer-motion'

function Number({ n }: any) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 8.3, friction: 7 },
  })
  return <animated.div className={`text-5xl text-purple-100 animate-pulse`}>{number.to((n: any) => n.toFixed(0))}</animated.div>
}  


const LoadingScreen = () => {

  return (
    <motion.div
      className={`bg-fuchsia-950 flex w-full h-full items-center justify-center min-h-screen`}
      animate={{ opacity: 0 }}
      transition={{ ease: [0.17, 0.67, 0.83, 0.67], delay: 4, duration: 1}}
    >
      <Number n={100} /><p className={`text-5xl text-purple-100 animate-pulse`}>%</p>
    </motion.div>
  )
}

export default LoadingScreen