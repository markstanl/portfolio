'use client'
import React, {useState} from 'react'

const Download = () => {
    const [hoverKey, setHoverKey] = useState(false)

    return (
        <a
            href="/cv.pdf"
            download
            onMouseEnter={() => setHoverKey((bool) => !bool)}
            className="w-fit inline-flex items-center bg-brand-prim text-brand-bg font-jetbrains text-nowrap
                            rounded-md hover:bg-brand-prim-hover
                            hover:tracking-wide transition-all duration-300
                            py-2 px-4 text-md gap-2
                            lg:text-base md:text-sm text-xs
                            "
        >
            Download CV
            <svg
                xmlns="http://www.w3.org/2000/svg"
                key={hoverKey ? 'a': 'b'}
                className={'lg:w-5 md:w-4 w-3'}
                viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                   strokeWidth={2}>
                    <path strokeDasharray={20} strokeDashoffset={20} d="M12 3l0 17.5">
                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s"
                                 values="20;0"></animate>
                    </path>
                    <path strokeDasharray={12} strokeDashoffset={12} d="M12 21l7 -7M12 21l-7 -7">
                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s"
                                 values="12;0"></animate>
                    </path>
                </g>
            </svg>
        </a>
    )
}
export default Download
