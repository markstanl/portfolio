import {ProjectType} from '@/../types/project';
import Project from '@/components/Project';
import Technologies from "@/app/Technologies";

const Home = () => {

    const projects: ProjectType[] = [
        {
            _id: '1',
            title: 'Project 1',
            description: 'Description 1',
            link: 'https://example.com',
            slug: {current: 'project-1'},
            tags: ['tag1', 'tag2'],
            image: {
                asset: {
                    _ref: 'image-ref-1',
                    _type: 'reference'
                }
            },
            sortOrder: 1
        },
        {
            _id: '2',
            title: 'Project 2',
            description: 'Description 2',
            link: 'https://example.com',
            slug: {current: 'project-2'},
            tags: ['tag3', 'tag4'],
            image: {
                asset: {
                    _ref: 'image-ref-2',
                    _type: 'reference'
                }
            },
            sortOrder: 2
        }
    ];

    return (
        <div className="w-screen min-h-screen bg-sec">
            {/* Hero */}
            <section className={'w-full h-screen flex flex-col'}>
                <nav className={''}>
                    <ul className={'flex gap-8 p-4'}>
                        <li>
                            <a href="#about" className={'text-brand-text'}>About</a>
                        </li>
                        <li>
                            <a href="#projects" className={'text-brand-text'}>Projects</a>
                        </li>
                        <li>
                            <a href="#creative" className={'text-brand-text'}>Creative</a>
                        </li>
                    </ul>
                </nav>
                <div className={'w-full flex '}>
                    <div className={'w-[50%] flex flex-col items-left justify-center text-brand-text p-24 gap-4'}>
                        <h1 className={'text-6xl py-4'}>Mark Stanley</h1>
                        <h2 className={'text-2xl'}>Software Development Intern @ C-Motive</h2>
                        <h2 className={'text-2xl'}>Student @ UW-Madison</h2>
                        <div className={'w-full flex justify-between'}>
                            {/* Icons */}

                        </div>
                        <button>
                            {/* Download CV */}

                        </button>
                    </div>
                    <div className={'w-[50%] flex items-center justify-center'}>
                        <div className={'w-64 h-128 bg-white'}/>
                    </div>
                </div>
            </section>
            {/* About  */}
            <section className={'w-full flex flex-col items-center min-h-screen'} id={'about'}>
                <h1 className={'text-5xl text-brand-prim'}>About</h1>
                <div className={'flex items-center'}>
                    <div className={'w-1/2 flex items-center justify-center'}>
                        <div className={'w-64 h-128 bg-white'}/>
                    </div>
                    <div className={'w-1/2 py-8'}>
                        <p>
                            Hey, I’m Mark. I am a student at UW-Madison studying Computer Science, Mathematics, and
                            Philosophy.
                            Currently, I am working at C-Motive as a software developer intern, crafting new software to
                            help enhance research efficiency. I am a hard-working developer, with a special interest in
                            machine learning and front-end development.
                            Off the computer I am a musician, write philosophical works, and rock climb!
                        </p>
                    </div>
                </div>
            </section>
            {/* Projects */}
            <section className={'w-full flex flex-col items-center min-h-screen'} id={'projects'}>
                <h1 className={'text-5xl'}>Projects</h1>
                <div className={'flex items-center'}>
                    {projects.map((project) => <Project key={project._id} project={project}/>)}
                </div>
            </section>
            {/* Technologies */}
            <section className={'flex flex-col items-center min-h-screen'}>
                <h1 className={'text-5xl'}>Technologies</h1>
                <div className={'flex items-center'}>
                    <Technologies/>
                </div>
            </section>

            {/* Creative */}
            <section className={'flex flex-col items-center min-h-screen'} id={'creative'}>
                <h1 className={'text-5xl'}>Creative</h1>
                <div className={'flex items-center justify-between'}>
                    <div className={'w-64 h-64 bg-white text-black'}>
                        <p>Off the computer, I am a musician and write some philosophy papers. See my creative work here</p>
                    </div>
                    <div className={'w-64 h-64 bg-white text-black'}>
                        <p>{'Blog ->'}</p>
                        <p>{'Published Paper ->'}</p>
                        <p>{'Music ->'}</p>
                    </div>
                </div>
            </section>

            {}
        </div>
    );
}

export default Home;