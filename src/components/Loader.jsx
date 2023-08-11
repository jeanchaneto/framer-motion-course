import React from 'react'
import { motion, useCycle } from 'framer-motion'

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0,-30],
        transition: {
            x: {
               repeatType: "reverse",
               repeat: Infinity,
               duration: 0.5
            },
            y: {
                ease: "easeOut",
                repeatType: "reverse",
                repeat: Infinity,
                duration: 0.25
             }
        }
    },
    animationTwo: {
        y: [0, 40],
        x: 0,
        transition: {
            y: {
                ease: "easeOut",
                repeatType: "reverse",
                repeat: Infinity,
                duration: 0.25
             }
        }
    }
}

const Loader = () => {
const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  return (
    <>
    <motion.div className="loader" 
    variants={loaderVariants}
    animate= {animation}
    >
    </motion.div>
    <div onClick={() =>cycleAnimation()} >Cycle Animation</div>
    </>
  )
}

export default Loader