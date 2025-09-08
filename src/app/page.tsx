import Link from 'next/link';
import Image from 'next/image';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroTypewriter from '@/components/HeroTypewriter';
import Projects from '@/components/project/Projects';
import Technologies from "@/app/Technologies";
import SocialIcons from "@/components/SocialIcons";
import Download from '@/components/Download';

import markTreeImage from '@/../public/mark_tree.jpg';
import markSquat from '@/../public/mark_squat.jpg'


const Home = () => {

    return (
        <>
            <Navbar/>
            <div className="w-full min-h-screen bg-brand-bg font-jetbrains flex flex-col items-center gap-8">
                {/* Hero */}
                <section className="w-full md:min-h-screen grid grid-cols-1 md:grid-cols-2 justify-items-center max-w-[2000px]">
                    <div className="h-full flex flex-col justify-center text-brand-text p-8 pt-12 md:p-24 gap-2">
                        <h1 className="lg:text-6xl md:text-5xl lg:py-6 text-4xl font-inter font-bold text-nowrap mb-2">
                            Mark Stanley
                        </h1>
                        <h2 className="lg:text-2xl md:text-lg text-sm font-jetbrains text-brand-prim w-full xl:text-nowrap">
                            Software Engineer Intern
                            <span className="text-brand-text">{' @'}</span>
                            <span className="text-brand-acc text-nowrap">{" Nostomania"}</span>
                        </h2>
                        <HeroTypewriter/>
                        <SocialIcons/>
                        <Download/>
                    </div>

                    <div className="h-full flex items-center justify-center md:pr-20">
                        <Image
                            src={markTreeImage}
                            alt="Picture of Mark standing by a tree"
                            className="h-auto max-h-[350px] sm:max-h-[400px] md:max-h-[500px] w-auto shadow-[6px_6px_0_0_#f2f2f2]"
                        />
                    </div>
                </section>

                {/* About  */}
                <section className="w-full flex flex-col items-center md:min-h-screen  max-w-[2000px]" id="about" >
                    <h1 className="md:text-5xl text-4xl text-brand-prim font-inter font-bold mb-6">About</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full px-8 gap-8 justify-items-center">
                        <div className="flex justify-center">
                            <Image
                                src={markSquat}
                                alt="Picture of Mark squatting with aura"
                                className="max-h-[300px] sm:max-h-[400px] md:max-h-[500px] w-auto shadow-[6px_6px_0_0_#f2f2f2]"
                            />
                        </div>
                        <div className="flex flex-col w-full justify-center items-start gap-4 md:text-lg text-sm md:p-12 sm:p-8 md:pr-28 sm:pr-24 text-brand-text">
                            <p className="w-full indent-4">
                                Hey, I’m Mark. I am a  junior at UW-Madison studying Computer Science, Mathematics, and
                                Philosophy.
                            </p>
                            <p className="w-full indent-4">
                                Currently, I am working at C-Motive as a software developer intern, crafting new
                                software to help enhance
                                research efficiency. I am a hard-working developer, with a special interest in machine
                                learning and front-end
                                development.
                            </p>
                            <p className="w-full indent-4">
                                Off the computer I am a musician, write philosophical works, and rock climb!
                            </p>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section className={'w-full flex flex-col items-center md:min-h-screen max-w-[2000px]'} id={'projects'}>
                    <h1 className={'md:text-5xl text-4xl text-brand-sec font-inter font-bold mb-6'}>Projects</h1>
                    <Projects/>
                </section>
                {/* Technologies */}
                <section className={'flex flex-col items-center md:min-h-[50vh] w-full mb-2 sm:mb-8  max-w-[2000px]'}>
                    <h1 className={'md:text-5xl text-4xl text-brand-acc font-inter font-bold'}>Technologies</h1>
                    <div className={'flex flex-col items-center w-full mt-8'}>
                        <Technologies/>
                    </div>
                </section>

                {/* Creative */}
                <section className="flex flex-col items-center w-full md:min-h-[50vh] max-w-[2000px]" id="creative">
                    <h1 className="md:text-5xl text-4xl text-brand-prim mb-4 md:mb-16 font-inter font-bold">Creative</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-6 md:px-24 lg:px-64 justify-items-center items-center">
                        <div className="text-brand-text text-lg md:text-xl">
                            <p className={"md:text-lg text-sm indent-4 sm:px-[15vw] md:px-0"}>
                                Off the computer, I am a musician and write some philosophy papers. See my creative work
                                on my{" "}
                                <Link
                                    href="/blog"
                                    className="hover:text-brand-prim transition-colors duration-300 underline cursor-pointer"
                                >
                                    blog
                                </Link>.
                            </p>
                        </div>
                        <div
                            className="bg-brand-text text-brand-bg rounded-lg flex flex-col justify-start p-6 min-w-2/3 gap-4 underline text-base md:text-lg">
                            <a
                                href="/blog"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-brand-prim-dark hover:tracking-wide transition-all duration-300 underline"
                            >
                                Blog →
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="/blog/the-ethics-of-mrbeast"
                                className="hover:text-brand-prim-dark hover:tracking-wide transition-all duration-300 underline"
                            >
                                Published Paper →
                            </a>
                            <a className="hover:text-brand-prim-dark hover:tracking-wide transition-all duration-300 underline cursor-pointer"
                                href={'https://musescore.com/user/43149374'}
                                target={'_blank'}
                                rel={'noopener noreferrer'}
                            >
                                Music →
                            </a>
                        </div>
                    </div>
                </section>


                {/* Footer */}
                <Footer />

            </div>
        </>
    );
}

export default Home;