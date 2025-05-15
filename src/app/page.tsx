import Link from 'next/link';
import Image from 'next/image';
import Navbar from "@/components/Navbar";

import HeroTypewriter from '@/components/HeroTypewriter';
import Projects from '@/components/Projects';
import Technologies from "@/app/Technologies";
import SocialIcons from "@/components/SocialIcons";
import Download from '@/components/Download';

import markTreeImage from '@/../public/mark_tree.jpg';
import markSquat from '@/../public/mark_squat.jpg'


const Home = () => {

    return (
        <div className="w-screen min-h-screen bg-brand-bg font-jetbrains flex flex-col items-center gap-8">
            <Navbar/>
            {/* Hero */}
            <section className={'w-full h-screen flex flex-col justify-items-start'}>
                <div className={'w-full flex h-full'}>
                    <div className={'w-[50%] h-2/3 flex flex-col items-left justify-center text-brand-text p-24 gap-2'}>
                        <h1 className={'text-6xl py-4 font-inter font-bold mb-2'}>Mark Stanley</h1>
                        <h2 className={'text-2xl font-jetbrains text-brand-prim'}>Software Development Intern <span
                            className={'text-brand-text'}>@</span>
                            <span className={'text-brand-acc'}>{" C-Motive"}</span></h2>
                        <HeroTypewriter/>
                        <SocialIcons/>
                        <Download/>
                    </div>
                    <div className={'w-1/2 h-3/4 flex items-center justify-center'}>
                        <Image src={markTreeImage} alt={'Picture of Mark standing by a tree'}
                               className={'h-4/5 w-auto shadow-[6px_6px_0_0_#f2f2f2]'}/>
                    </div>
                </div>
            </section>
            {/* About  */}
            <section className={'w-full flex flex-col items-center min-h-screen'} id={'about'}>
                <h1 className={'text-5xl text-brand-prim font-inter font-bold mb-6'}>About</h1>
                <div className={'flex items-center'}>
                    <div className={'w-1/3 h-full flex flex-col items-end justify-center'}>
                        <Image src={markSquat} alt={'Picture of Mark standing by a tree'}
                               className={'h-4/5 w-auto shadow-[6px_6px_0_0_#f2f2f2]'}/>
                    </div>
                    <div className={'w-2/3 flex flex-col items-center justify-center gap-4 text-md'}>
                        <p className={'w-1/2 indent-4 text-justify'}>
                            Hey, I’m Mark. I am a student at UW-Madison studying Computer Science, Mathematics, and
                            Philosophy.
                        </p>
                        <p className={'w-1/2 indent-4 text-justify'}>
                            Currently, I am working at C-Motive as a software developer intern, crafting new software to
                            help enhance research efficiency. I am a hard-working developer, with a special interest in
                            machine learning and front-end development.
                        </p>
                        <p className={'w-1/2 indent-4 text-justify'}>
                            Off the computer I am a musician, write philosophical works, and rock climb!
                        </p>
                    </div>
                </div>
            </section>
            {/* Projects */}
            <section className={'w-full flex flex-col items-center min-h-screen'} id={'projects'}>
                <h1 className={'text-5xl text-brand-sec font-inter font-bold mb-6'}>Projects</h1>
                <Projects/>
            </section>
            {/* Technologies */}
            <section className={'flex flex-col items-center min-h-[50vh] w-full mb-8'}>
                <h1 className={'text-5xl text-brand-acc font-inter font-bold'}>Technologies</h1>
                <div className={'flex flex-col items-center w-full mt-8'}>
                    <Technologies/>
                </div>
            </section>

            {/* Creative */}
            <section className={'flex flex-col items-center w-full min-h-[50vh]'} id={'creative'}>
                <h1 className={'text-5xl text-brand-prim mb-16 font-inter font-bold'}>Creative</h1>
                <div className={'w-full flex items-center justify-evenly'}>
                    <div className={'w-1/4 text-brand-text text-xl'}>
                        <p>Off the computer, I am a musician and write some philosophy papers. See my creative work on
                            my <Link href={'/blog'}
                                     className={'hover:text-brand-prim transition-colors duration-300 underline cursor-pointer'}>blog</Link>.
                        </p>

                    </div>
                    <div
                        className={'w-1/4 bg-brand-text text-brand-bg rounded-lg flex flex-col justify-items-start p-6 gap-4 underline'}>
                        <Link href={'/blog'}
                              className={'hover:text-brand-prim-dark hover:tracking-wide transition-all duration-300 underline'}>{'Blog ->'}</Link>
                        <Link href={'/blog'}
                              className={'hover:text-brand-prim-dark hover:tracking-wide transition-all duration-300 underline'}>{'Published Paper ->'}</Link>
                        <a className={'hover:text-brand-prim-dark hover:tracking-wide transition-all duration-300 underline cursor-pointer'}>{'Music ->'}</a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-brand-footer text-sm py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-6xl mx-auto">
                    <div>
                        <h4 className="text-xl text-brand-sec mb-2">Mark Stanley</h4>
                        <p>
                            Developer at <span className="text-brand-acc">C-Motive</span>. Student at UW-Madison.
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
                                    href="/blog"
                                    className="hover:text-brand-prim hover:tracking-wide transition-all duration-300 underline"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p>Designed in Figma</p>
                        <p>Crafted with Next</p>
                        <p>Built with Love</p>
                        <p className="text-brand-acc">-Mark</p>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Home;