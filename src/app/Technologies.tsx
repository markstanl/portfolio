'use client'
import React, {useState} from 'react'

const technologyButtons: string[] = ['Languages', 'Machine Learning', 'Web Development']

const languages: string[] = ['Python', 'JavaScript', 'TypeScript', 'Java', 'C']
const machineLearning: string[] = ['Python', 'TensorFlow', 'PyTorch']
const webDevelopment: string[] = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js']

const technologyArrays: { [key: string]: string[] } = {
    'Languages': languages,
    'Machine Learning': machineLearning,
    'Web Development': webDevelopment,
}

const Technologies = () => {

    const [activeButton, setActiveButton] = useState<string>(technologyButtons[0])
    const [activeContent, setActiveContent] = useState<string[]>(technologyArrays[activeButton])

    return (
        <div>
            {technologyButtons.map((button) => (
                <button
                    key={button}
                    onClick={() => {
                        setActiveButton(button)
                        setActiveContent(technologyArrays[button])
                    }}
                    className={`${
                        activeButton === button
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-black'
                    } p-2 m-2 rounded`}
                >
                    {button}
                </button>))
            }
            <div>
                {activeContent.map((item) => (
                    <div key={item} className={'p-2 m-2 bg-gray-100 rounded text-black'}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Technologies
