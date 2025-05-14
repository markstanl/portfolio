'use client'
import React from 'react'
import {Typewriter} from "react-simple-typewriter";

const HeroTypewriter = () => {

    return (
        <h2 className={'text-2xl font-jetbrains text-brand-sec'}>
                            <span className="text-brand-sec">
                                <Typewriter
                                    words={['Student @ UW-Madison', 'ML Developer', 'Frontend Enthusiast', 'Mathematician', 'Philosopher']}
                                    loop
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={1750}
                                />
                          </span>
        </h2>
    )
}
export default HeroTypewriter
