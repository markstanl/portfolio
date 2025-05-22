import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="w-full flex justify-center mb-12">
            <nav className="fixed top-2 z-50 w-full px-4 md:px-8 lg:px-12 sm:max-h-8">
                <div className="max-w-screen-lg mx-auto
                flex items-center justify-between py-4 lg:px-32 md:px-16 px-6
                font-jetbrains
                    rounded-lg backdrop-blur-md bg-brand-glass/30 border border-brand-border/40 shadow-sm text-brand-text">

                    <h2 className="font-bold md:text-xl text-lg select-none text-brand-text whitespace-nowrap">
                        Mark Stanley
                    </h2>

                    <ul className="flex md:gap-8 gap-4 md:text-base text-sm flex-wrap justify-end">
                        <li>
                            <Link href="/" className="hover:text-brand-prim transition-colors duration-300 underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="hover:text-brand-prim transition-colors duration-300 underline">
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar
