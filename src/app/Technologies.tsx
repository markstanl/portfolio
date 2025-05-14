'use client'
import React, {useState} from 'react'

import IconMaps from "@/components/iconMaps";

const technologyButtons: string[] = ['Languages', 'Machine Learning', 'Web Development', 'Development Tools']

const languages: string[] = ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'MATLAB', 'React', 'SQL', 'LaTeX']
const machineLearning: string[] = ['Python', 'Jupyter Notebook', 'PyTorch', 'TensorFlow', 'scikit-learn', 'NLTK', 'NumPy', 'SciPy', 'pandas', 'Polars', 'geopandas', 'PyArrow', 'Matplotlib']
const webDevelopment: string[] = ['TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'React', 'React Native', 'HTML', 'CSS', 'Flask', 'FastAPI', 'REST']
const developmentTools: string[] = ['Git', 'GitHub', 'Docker', 'Linux', 'wit.ai', 'Dialogflow', 'Figma']

const technologyArrays: { [key: string]: string[] } = {
    'Languages': languages,
    'Machine Learning': machineLearning,
    'Web Development': webDevelopment,
    'Development Tools': developmentTools,
}

const Technologies = () => {

    const [activeButton, setActiveButton] = useState<string>(technologyButtons[0])
    const [activeContent, setActiveContent] = useState<string[]>(technologyArrays[activeButton])

    return (
        <div className={'flex flex-col items-center w-2/3'}>
            <div className={'flex justify-center flex-wrap mb-4 gap-2'}>
                {technologyButtons.map((button) => (
                    <button
                        key={button}
                        onClick={() => {
                            setActiveButton(button)
                            setActiveContent(technologyArrays[button])
                        }}
                        className={`${
                            activeButton === button
                                ? 'bg-brand-prim text-brand-bg transition-colors hover:bg-brand-prim-hover duration-300'
                                : 'bg-brand-text text-black transition-colors hover:bg-brand-text-hover duration-300'
                        } p-2 px-3 m-2 rounded border-brand-border hover:cursor-pointer`}
                    >
                        {button}
                    </button>))
                }
            </div>
            <div className={'flex flex-wrap justify-center gap-3 p-4 bg-brand-text w-full rounded-xl'}>
                {activeContent.map((item) => (
                    <div key={item} className={'p-2 mx-1 bg-brand-bg px-4 rounded text-brand-text flex items-center gap-2'}>
                        <IconMaps name={item} />
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Technologies
