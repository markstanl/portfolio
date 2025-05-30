'use client'
import React from 'react'
import {motion} from "motion/react"

const SocialIcons = () => {
    return (
        <div className={'w-full flex justify-items-start items-center lg:gap-8 md:gap-6 gap-4 lg:my-4 md:my-2 my-1'}>
            {/* GitHub */}
            <motion.a href={'https://github.com/markstanl'}
                      rel={'noopener noreferrer'}
                      aria-label={"Visit Mark Stanley's GitHub"}
                      animate={{ rotate: 0, scale: 1 }}
                      whileHover={{
                          scale: 1.2,
                          rotate: [-5, 5, -3, 3, 0],
                      }}
                      transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                          times: [0, 0.3, 0.55, 0.8, 1.05],
                      }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                     className={'hover:text-brand-acc transition-colors duration-300 md:w-8 w-6'}>
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 22v-3q0-2 1-3A7 6.5 0 0 1 5 5Q4 3 5 1q3 0 4 2q3.5-1 7 0q1-2 4-2q1 2 0 4a7 6.5 0 0 1-5 11q1 1 1 3v3m-7-3c-4 1-4-2-7-3"></path>
                </svg>
            </motion.a>
            {/* LinkedIn */}
            <motion.a href={'https://www.linkedin.com/in/markstanl/'}
                      rel={'noopener noreferrer'}
                      aria-label={"Visit Mark Stanley's LinkedIn"}
                      animate={{ rotate: 0, scale: 1 }}
                      whileHover={{
                          scale: 1.2,
                          rotate: [-5, 5, -3, 3, 0],
                      }}
                      transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                          times: [0, 0.3, 0.55, 0.8, 1.05],
                      }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                     className={'hover:text-brand-acc transition-colors duration-300 md:w-8 w-6'}>
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                       strokeWidth={1.5}>
                        <circle cx={4} cy={4} r={2}></circle>
                        <path d="M2 9h4v12H2Zm20 12h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 12 0Z"></path>
                    </g>
                </svg>
            </motion.a>
            {/* HuggingFace */}
            <motion.a
                href={'https://huggingface.co/markstanl'}
                rel={'noopener noreferrer'}
                aria-label={"Visit Mark Stanley's HuggingFace"}
                animate={{ rotate: 0, scale: 1 }}
                whileHover={{
                    scale: 1.2,
                    rotate: [-5, 5, -3, 3, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    times: [0, 0.3, 0.55, 0.8, 1.05],
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 32 32"
                     className={'hover:text-brand-acc transition-colors duration-300 md:w-8 w-6'}>
                    <g fill="currentColor">
                        <path
                            d="M3 15.999c0-3.67 1.106-6.91 3.235-9.221C8.35 4.48 11.568 3 15.999 3s7.648 1.48 9.764 3.778c2.129 2.311 3.235 5.55 3.235 9.22q0 .632-.044 1.244c.33.179.602.447.787.772c.418.05.796.23 1.094.497q.163-1.232.163-2.512c0-4.061-1.227-7.821-3.764-10.576C24.684 2.654 20.903 1 16 1S7.313 2.654 4.763 5.423C2.226 8.178 1 11.938 1 15.999q0 1.281.163 2.513a2 2 0 0 1 1.096-.498a2 2 0 0 1 .784-.77A18 18 0 0 1 3 15.998m9.668 12.688a4.77 4.77 0 0 1-1.861 1.597c1.557.466 3.29.715 5.192.715s3.635-.25 5.194-.716a4.77 4.77 0 0 1-1.861-1.596a17 17 0 0 1-3.333.312c-1.198 0-2.308-.108-3.331-.312"></path>
                        <path
                            d="M7.888 13.338q-.045.03-.088.062a2 2 0 0 0-.688 2.262a2 2 0 1 1 .775-2.325m17.001 2.326a2 2 0 0 0-.776-2.325a2 2 0 1 1 .776 2.325M9.349 9.413c-.21.228-.32.53-.367.778a1 1 0 0 1-1.964-.382c.089-.456.31-1.153.858-1.749C8.453 7.431 9.316 7 10.5 7c1.195 0 2.062.452 2.636 1.082c.544.597.77 1.292.85 1.747a1 1 0 0 1-1.971.342a1.55 1.55 0 0 0-.358-.742C11.47 9.222 11.142 9 10.5 9c-.653 0-.972.217-1.151.413m11.001 0c-.21.228-.32.53-.368.778a1 1 0 0 1-1.963-.382c.088-.456.31-1.153.857-1.749C19.453 7.431 20.316 7 21.5 7c1.196 0 2.062.452 2.636 1.082c.544.597.77 1.292.85 1.747a1 1 0 0 1-1.971.342a1.55 1.55 0 0 0-.358-.742C22.47 9.222 22.142 9 21.5 9c-.653 0-.971.217-1.15.413M8.4 14.2a1 1 0 0 1 1.4.2c.298.397 1.992 2.1 6.2 2.1s5.902-1.703 6.2-2.1a1 1 0 1 1 1.6 1.2c-.702.936-3.008 2.9-7.8 2.9s-7.098-1.964-7.8-2.9a1 1 0 0 1 .2-1.4m20.59 4.94a1 1 0 0 0-1.649-.892L23.58 21.54l-.079-.04c0-.413.038-.788.072-1.125c.09-.888.153-1.513-.572-1.875c-1.338-.669-1.952 1.564-2.363 3.743c-.094.496-.32.955-.572 1.392c-1.33 2.303-.066 4.614.935 5.365c1.789 1.342 3.5 1 5 0c.908-.605 2.635-1.82 3.927-2.737a1.116 1.116 0 0 0-1.146-1.904l-.126.064l1.985-1.655a1 1 0 0 0-.782-1.758l.293-.25a1 1 0 0 0-1.16-1.62m-25.982 0a1 1 0 0 1 1.649-.892l3.763 3.292l.079-.04c0-.413-.038-.788-.072-1.125c-.09-.888-.153-1.513.572-1.875c1.338-.669 1.952 1.564 2.363 3.743c.094.496.32.955.572 1.392c1.33 2.303.066 4.614-.935 5.365c-1.79 1.342-3.5 1-5 0c-.908-.605-2.635-1.82-3.927-2.737A1.116 1.116 0 0 1 3.22 24.36l.126.064l-1.985-1.655a1 1 0 0 1 .781-1.758l-.292-.25a1 1 0 0 1 1.16-1.62"></path>
                    </g>
                </svg>
            </motion.a>
        </div>
    )
}
export default SocialIcons
