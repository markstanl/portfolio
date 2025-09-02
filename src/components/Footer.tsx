import React from 'react'
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full bg-brand-footer text-sm py-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-6xl mx-auto">
                <div>
                    <h4 className="text-xl text-brand-sec mb-2">Mark Stanley</h4>
                    <p className={'text-brand-text'}>
                        Developer at <span className="text-brand-acc">Nostomania</span>. Student at UW-Madison.
                        Specializing in Machine Learning and Web Development.
                    </p>
                </div>

                <div>
                    <h4 className="text-xl text-brand-sec mb-2">Social</h4>
                    <ul className="space-y-1">
                        <li>
                            <a
                                href="https://github.com/markstanl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-text hover:text-brand-prim hover:tracking-wide transition-all duration-300 underline"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://linkedin.com/in/markstanl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-text hover:text-brand-prim hover:tracking-wide transition-all duration-300 underline"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://huggingface.co/markstanl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-text hover:text-brand-prim hover:tracking-wide transition-all duration-300 underline"
                            >
                                Hugging Face
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:markgstanley1@gmail.com"
                                className="text-brand-text hover:text-brand-prim hover:tracking-wide transition-all duration-300 underline"
                            >
                                Email
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl text-brand-sec mb-2">Links</h4>
                    <ul className="space-y-1">
                        <li>
                            <Link
                                href="/"
                                className="text-brand-text hover:text-brand-prim hover:tracking-wide transition-all duration-300 underline"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className="text-brand-text hover:text-brand-prim hover:tracking-wide transition-all duration-300 underline"
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className={'text-brand-text'}>Designed in Figma</p>
                    <p className={'text-brand-text'}>Crafted with Next</p>
                    <p className={'text-brand-text'}>Built with Love</p>
                    <p className="text-brand-acc">-Mark</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
