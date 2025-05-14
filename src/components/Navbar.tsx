import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="w-full bg-transparent py-4 px-32">
            <ul className="flex justify-end gap-18 font-jetbrains text-xl">
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
        </nav>
    );
};

export default Navbar
