'use client'
import React from 'react'
import IconMaps from '@/components/iconMaps'
import {motion} from 'motion/react'

const TechnologyTag = ({item}: {item: string}) => {
    return (
        <div
            className="tech-item opacity-0 p-2 sm:px-4 px-2 bg-brand-bg rounded text-brand-text flex items-center gap-2 select-none text-sm sm:text-base"
        >
            <motion.span
                animate={{rotate: 0, scale: 1}}
                whileHover={{
                    scale: 1.05,
                    rotate: [-2, 2, -1, 1, 0],
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    times: [0, 0.3, 0.55, 0.8, 1],
                }}
            >
                <IconMaps name={item}/>
            </motion.span>

            {item}
        </div>
    )
}
export default TechnologyTag
