'use client'

import React, {useEffect, useState} from 'react'
import {useAnimate, stagger} from 'motion/react'
import {useInView} from 'react-intersection-observer'

import TechnologyTag from "@/components/TechnologyTag";

const technologyButtons = ['Languages', 'Machine Learning', 'Web Development', 'Development Tools']

const languages = ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'MATLAB', 'React', 'SQL', 'LaTeX']
const machineLearning = ['Python', 'Jupyter Notebook', 'PyTorch', 'TensorFlow', 'scikit-learn', 'NLTK', 'NumPy', 'SciPy', 'pandas', 'Polars', 'geopandas', 'PyArrow', 'Matplotlib']
const webDevelopment = ['TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'React', 'React Native', 'HTML', 'CSS', 'Flask', 'FastAPI', 'REST']
const developmentTools = ['Git', 'GitHub', 'Docker', 'Linux', 'wit.ai', 'Dialogflow', 'Figma']

const technologyArrays: Record<string, string[]> = {
    Languages: languages,
    'Machine Learning': machineLearning,
    'Web Development': webDevelopment,
    'Development Tools': developmentTools,
}

const Technologies = () => {
    const [activeButton, setActiveButton] = useState<string>(technologyButtons[0])
    const [activeContent, setActiveContent] = useState<string[]>(technologyArrays[activeButton])
    const [scope, animate] = useAnimate()
    const [sectionRef, inView] = useInView({threshold: 0.5, triggerOnce: true});

    useEffect(() => {
        if (!inView) return
        const items = scope.current?.querySelectorAll('.tech-item')
        if (!items) return

        animate(
            items,
            {opacity: [0, 1], y: [-10, 0]},
            {delay: stagger(0.05), duration: 0.3, ease: 'easeOut'}
        )
    }, [activeContent, animate, scope, inView])

    return (
        <div ref={scope} className="flex flex-col items-center w-full px-4 sm:px-8 md:px-16 lg:px-44">
            {/* filter buttons */}
            <div className="flex justify-center flex-wrap mb-4 gap-2 sm:gap-3 md:gap-4">
                {technologyButtons.map((button) => (
                    <button
                        key={button}
                        onClick={() => {
                            setActiveButton(button)
                            setActiveContent(technologyArrays[button])
                        }}
                        className={`${
                            activeButton === button
                                ? 'bg-brand-prim text-brand-bg hover:bg-brand-prim-hover'
                                : 'bg-brand-text text-black hover:bg-brand-text-hover'
                        } p-2 sm:px-3 px-2 rounded border-brand-border transition-colors duration-300 text-xs sm:text-sm md:text-base cursor-pointer`}
                    >
                        {button}
                    </button>
                ))}
            </div>

            {/* tags */}
            <div
                className="flex flex-wrap justify-center gap-2 sm:gap-3 p-4 bg-brand-text w-full rounded-xl"
                ref={sectionRef}
            >
                {inView &&
                    activeContent.map((item) => (
                        <TechnologyTag key={item} item={item} />
                    ))}
            </div>
        </div>

    )
}

export default Technologies
