import {
    SiPython, SiJavascript, SiTypescript, SiReact, SiJupyter, SiPytorch, SiTensorflow, SiScikitlearn, SiNumpy,
    SiScipy, SiGeopandas, SiPandas, SiPolars, SiNextdotjs, SiTailwindcss, SiHtml5, SiFlask, SiFastapi, SiGit, SiGithub,
    SiDocker, SiLinux, SiDialogflow, SiFigma
} from 'react-icons/si'
import {FaJava} from "react-icons/fa";
import {TbSql, TbMessageLanguage, TbBrandReactNative} from "react-icons/tb";

import React, {JSX} from 'react'


type IconMap = {
    [key: string]: React.FC<React.SVGProps<SVGSVGElement>> | JSX.Element,
}

const iconMap: IconMap = {
    'Python': SiPython,
    'JavaScript': SiJavascript,
    'TypeScript': SiTypescript,
    'Java': FaJava,
    'C': <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
            <path d="M29.388 27.264a6.406 6.406 0 1 1 .116-6.745"></path>
            <path
                d="M33.728 30.388a11.896 11.896 0 1 1 .216-12.524m-4.44 2.656l4.44-2.656m-.216 12.524l-4.34-3.124"></path>
            <path d="M24 3.5L5.92 13.336v20.816L24 44.5l18.08-10.275V13.163z"></path>
        </g>
    </svg>,
    'MATLAB': <svg xmlns="http://www.w3.org/2000/svg" width={128} height={128} viewBox="0 0 128 128">
        <path fill="currentColor"
              d="M123.965 91.902c-7.246-18.297-13.262-37.058-20.184-55.476c-3.054-7.84-6.047-15.746-10.215-23.082c-1.656-2.633-3.238-5.528-5.953-7.215a4 4 0 0 0-2.222-.606c-1.27.028-2.536.594-3.504 1.415c-3.645 2.886-5.805 7.082-8.227 10.949c-4.277 7.172-8.789 14.687-15.941 19.347c-3.36 2.371-7.762 2.63-11 5.172c-4.43 3.34-7.442 8.078-11.074 12.184c-.829.988-2.11 1.383-3.227 1.918C21.578 60.93 10.738 65.336 0 69.98c9.09 7.032 18.777 13.29 28.05 20.079c2.544-.504 5.098-1.547 7.72-1.082c4.16 1.3 6.597 5.285 8.503 8.93c3.875 7.94 6.676 16.323 9.813 24.57c5.246-.375 9.969-3.079 14.027-6.258c7.809-6.324 13.758-14.5 20.305-22.047c3.14-3.3 6.34-7.23 11.05-8.149c4.762-1.152 9.864.555 13.395 3.836c4.957 4.43 9.344 9.551 15.137 12.942c-.777-3.836-2.645-7.278-4.035-10.899M42.96 79.012c-4.57 2.703-9.426 4.93-14.176 7.289c-7.457-4.996-14.723-10.29-22.05-15.465c9.878-4.328 19.91-8.348 29.917-12.387c4.746 3.703 9.637 7.223 14.383 10.926c-2.23 3.563-4.914 6.871-8.074 9.637m10.168-12.414C48.414 63.058 43.64 59.609 39 55.977c2.977-4.055 6.238-7.977 10.14-11.172c2.587-1.657 5.743-2.117 8.426-3.61c6.368-3.18 10.711-9.011 14.86-14.582c-5.317 13.805-10.992 27.664-19.297 39.985zm0 0"></path>
    </svg>,
    'React': SiReact,
    'SQL': TbSql,
    'LaTeX': (<svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8">
        <path fill="currentColor"
              d="M5 8H4l1.5-3L4 2h1l1 2l1-2h1L6.5 5L8 8H7L6 6M2 5V1H0V0h5v1H3v4m0 1v1H0V2h1v4"></path>
    </svg>),
    'Jupyter Notebook': SiJupyter,
    'PyTorch': SiPytorch,
    'TensorFlow': SiTensorflow,
    'scikit-learn': SiScikitlearn,
    'NLTK': TbMessageLanguage,
    'NumPy': SiNumpy,
    'SciPy': SiScipy,
    'pandas': SiPandas,
    'Polars': SiPolars,
    'geopandas': SiGeopandas,
    'PyArrow': (<svg
        xmlns="http://www.w3.org/2000/svg"
        width={1800}
        height={1575}
        className="svglite"
        viewBox="0 0 1350 1181.25"
    >
        <defs>
            <style>
                {
                    ".svglite polygon,.svglite rect{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
                }
            </style>
        </defs>
        <defs>
            <clipPath id="cpMC4wMHwxMzUwLjAwfDAuMDB8MTE4MS4yNQ==">
                <path d="M0 0h1350v1181.25H0z"/>
            </clipPath>
        </defs>
        <g clipPath="url(#cpMC4wMHwxMzUwLjAwfDAuMDB8MTE4MS4yNQ==)">
            <path
                d="m168.75 168.75 421.87 421.87-421.87 421.88V843.75l253.13-253.13L168.75 337.5V168.75z"
                style={{
                    strokeWidth: 1.07,
                    fill: "currentColor",
                }}
            />
            <path
                d="m464.06 168.75 421.88 421.87-421.88 421.88V843.75l253.13-253.13L464.06 337.5V168.75z"
                style={{
                    strokeWidth: 1.07,
                    fill: "currentColor",
                }}
            />
            <path
                d="m759.38 168.75 421.87 421.87-421.87 421.88V843.75l253.12-253.13L759.38 337.5V168.75z"
                style={{
                    strokeWidth: 1.07,
                    fill: "currentColor",
                }}
            />
        </g>
    </svg>),
    'Matplotlib': (<svg xmlns="http://www.w3.org/2000/svg" width={128} height={128} viewBox="0 0 128 128">
        <path fill="currentColor"
              d="M64 126c-16.56 0-32.13-6.449-43.84-18.159S2 80.561 2 64s6.449-32.13 18.159-43.841S47.439 2 64 2s32.131 6.449 43.841 18.159S126 47.439 126 64s-6.449 32.131-18.159 43.841S80.561 126 64 126M64 3.82c-16.074 0-31.187 6.26-42.553 17.626C10.08 32.813 3.82 47.925 3.82 64s6.26 31.188 17.626 42.554S47.925 124.18 64 124.18s31.188-6.26 42.554-17.626S124.18 80.075 124.18 64s-6.26-31.187-17.626-42.554C95.187 10.08 80.075 3.82 64 3.82"></path>
        <path fill="currentColor"
              d="M64 112.35c-26.66 0-48.35-21.689-48.35-48.35S37.34 15.65 64 15.65S112.35 37.34 112.35 64S90.66 112.35 64 112.35m0-96c-26.274 0-47.65 21.375-47.65 47.65S37.726 111.65 64 111.65S111.65 90.274 111.65 64S90.274 16.35 64 16.35"></path>
        <path fill="currentColor"
              d="M64 98.35c-18.94 0-34.35-15.41-34.35-34.35S45.06 29.65 64 29.65S98.35 45.06 98.35 64S82.94 98.35 64 98.35m0-68c-18.555 0-33.65 15.095-33.65 33.65S45.445 97.65 64 97.65S97.65 82.555 97.65 64S82.555 30.35 64 30.35"></path>
        <path fill="currentColor"
              d="M64 84.35c-11.221 0-20.35-9.129-20.35-20.35S52.779 43.65 64 43.65S84.35 52.779 84.35 64S75.221 84.35 64 84.35m0-40c-10.835 0-19.65 8.815-19.65 19.65S53.165 83.65 64 83.65S83.65 74.835 83.65 64S74.835 44.35 64 44.35"></path>
        <path fill="currentColor"
              d="M64 71.35c-4.053 0-7.35-3.297-7.35-7.35s3.297-7.35 7.35-7.35s7.35 3.297 7.35 7.35s-3.297 7.35-7.35 7.35m0-14c-3.667 0-6.65 2.983-6.65 6.65s2.983 6.65 6.65 6.65s6.65-2.983 6.65-6.65s-2.983-6.65-6.65-6.65"></path>
        <path fill="currentColor"
              d="M107.061 96.836L65.178 64.197l12.373.001a.413.413 0 0 0 .413-.413a13.9 13.9 0 0 0-.684-4.323v-.001a.414.414 0 0 0-.521-.264l-11.604 3.769L89.693 32.2a.414.414 0 0 0-.066-.581a41 41 0 0 0-11.196-6.351h-.001a.41.41 0 0 0-.531.242L64.072 62.349L52.296 10.752a.414.414 0 0 0-.495-.312a54.8 54.8 0 0 0-22.892 11.342l-.002.002a.41.41 0 0 0-.05.58L62.43 62.578L21.347 42.794h-.001a.413.413 0 0 0-.551.193c-4.378 9.046-5.79 19.471-3.977 29.355a.415.415 0 0 0 .481.332l43.748-7.94l-21.715 10.457h-.001a.414.414 0 0 0-.192.552a28 28 0 0 0 2.177 3.738a.42.42 0 0 0 .577.105L63.334 64.73l-7.315 32.049a.416.416 0 0 0 .311.496c2.495.57 5.08.857 7.66.857c1.923.001 3.842-.16 5.738-.481a.414.414 0 0 0 .339-.477l-5.417-31.88l32.857 41.202a.414.414 0 0 0 .58.067a54.7 54.7 0 0 0 9.045-9.146a.413.413 0 0 0-.071-.581"></path>
        <path fill="currentColor"
              d="M64.35 125.35h-.7V64.845l-42.784 42.783l-.495-.495l.248-.247L63.155 64.35H2.65v-.7h60.505L20.372 20.866l.495-.495L63.65 63.155V2.65h.7v60.505l42.784-42.783l.495.495l-.248.248L64.845 63.65h60.505v.7H64.845l42.783 42.784l-.495.495l-.247-.248L64.35 64.845z"></path>
    </svg>),
    'Next.js': SiNextdotjs,
    'Tailwind CSS': SiTailwindcss,
    'React Native': TbBrandReactNative,
    'HTML': SiHtml5,
    'CSS': (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
        <path fill="currentColor"
              d="M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84c-.096-.192-.288-.264-.552-.264c-.456 0-.696.264-.696.84c-.024.576.288.888.768 1.08c.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592c-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176c.264 0 .456-.072.552-.24c.192-.312.24-1.176-.048-1.512c-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536c0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84c-.096-.192-.264-.264-.528-.264c-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296c.264.432.408.984.408 1.656c.024 1.608-.888 2.592-2.472 2.592c-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176c.264 0 .456-.072.552-.24c.216-.312.264-1.176-.048-1.512c-.288-.408-.888-.6-1.32-.816c-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63c.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96c-.312-.144-.768-.048-.888.24c-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688c-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848c.432-.408 1.146-.624 1.857-.63"></path>
    </svg>),
    'Flask': SiFlask,
    'FastAPI': SiFastapi,
    'REST': (<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
        <path fill="currentColor"
              d="M16 13c-1.3 0-2.4.8-2.8 2H9c0-.7-.2-1.3-.5-1.8l7.1-7.3c.3 0 .6.1.9.1C17.9 6 19 4.9 19 3.5S17.9 1 16.5 1S14 2.1 14 3.5c0 .3.1.7.2 1l-7 7.2c-.6-.5-1.4-.7-2.2-.7V6.8C6.2 6.4 7 5.3 7 4c0-1.7-1.3-3-3-3S1 2.3 1 4c0 1.3.8 2.4 2 2.8v4.7c-1.2.7-2 2-2 3.4c0 2.2 1.8 4 4 4c1.5 0 2.8-.8 3.4-2h4.7c.4 1.1 1.5 2 2.8 2c1.6 0 3-1.3 3-3C19 14.3 17.6 13 16 13"></path>
    </svg>),
    'Git': SiGit,
    'GitHub': SiGithub,
    'Docker': SiDocker,
    'Linux': SiLinux,
    'wit.ai': (<svg xmlns="http://www.w3.org/2000/svg" width={640} height={512} viewBox="0 0 640 512">
        <path fill="currentColor"
              d="M32 224h32v192H32a31.96 31.96 0 0 1-32-32V256a31.96 31.96 0 0 1 32-32m512-48v272a64.063 64.063 0 0 1-64 64H160a64.063 64.063 0 0 1-64-64V176a79.974 79.974 0 0 1 80-80h112V32a32 32 0 0 1 64 0v64h112a79.974 79.974 0 0 1 80 80m-280 80a40 40 0 1 0-40 40a39.997 39.997 0 0 0 40-40m-8 128h-64v32h64Zm96 0h-64v32h64Zm104-128a40 40 0 1 0-40 40a39.997 39.997 0 0 0 40-40m-8 128h-64v32h64Zm192-128v128a31.96 31.96 0 0 1-32 32h-32V224h32a31.96 31.96 0 0 1 32 32"></path>
    </svg>),
    'Dialogflow': SiDialogflow,
    'Figma': SiFigma,
}

type IconMapsProps = {
    name: string;
    className?: string;
};

const IconMaps: React.FC<IconMapsProps> = ({name, className = 'md:w-5 md:h-5 h-4 w-4 text-brand-prim'}) => {
    const icon = iconMap[name];
    if (!icon) return null;

    if (typeof icon === 'function') {
        // rect icon case
        const IconComponent = icon;
        return <IconComponent className={className}/>;
    }

    //svg case
    return React.cloneElement(icon, {
        className: `${className} ${icon.props.className || ''}`,
    });
};

export default IconMaps;
