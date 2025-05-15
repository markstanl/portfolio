'use client'
import React from 'react'
import {motion} from 'motion/react'

const Tags = ({tags}: { tags: string[] }) => {
    return (
        <div className={'w-full flex justify-items-start gap-4'}>
            {tags.map((tag => {

                // a bit of randomness for variety
                const randomSigns = [Math.random() < 0.5 ? -1 : 1, Math.random() < 0.5 ? -1 : 1, Math.random() < 0.5 ? -1 : 1]

                return(
                <motion.span
                    key={tag}
                    className={'px-2 py-1 text-xs bg-brand-bg text-brand-text rounded-sm select-none'}
                    whileHover={{
                        rotateX: 20 * randomSigns[0],
                        rotateY: 3 * randomSigns[1],
                        rotateZ: 2 * randomSigns[2],
                    }}
                    transition={{type: "spring", stiffness: 200, damping: 15}}
                >
                    #{tag}
                </motion.span>)
            }))}
        </div>
    )
}
export default Tags
