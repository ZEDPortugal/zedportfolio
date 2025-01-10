import React from 'react';
import { useInView } from 'react-intersection-observer';


const About = ({ isLight }) => {
    const { ref, inView } = useInView({
        triggerOnce: false, // Ensure the animation retriggers
        threshold: 0.1, // Activate when 10% of the section is visible
    });

    return (
        <section
            id="about"
            ref={ref}
            className={`about-section flex flex-col items-center justify-center ${isLight ? 'bg-gray-100' : 'bg-[#000000]'} transition-colors duration-500`}
        >
            <div className="container px-5 mx-auto py-10">
                <h2
                    className={`text-3xl font-bold mb-4 ${isLight ? 'text-black' : 'text-white'} transition-colors duration-500 ${
                        inView ? '' : 'opacity-0'
                    }`}
                >
                    About Me
                </h2>
                <p
                    className={`text-sm mb-4 ${isLight ? 'text-black' : 'text-white'} transition-colors duration-500 ${
                        inView ? 'animate-fade-right' : 'opacity-0'
                    }`}
                >
                    Hi, I’m Joe Marten Zedric S. Portugal, a passionate front-end developer dedicated to crafting visually stunning, user-friendly, and accessible web experiences.
                </p>
                <p
                    className={`text-sm mb-4 ${isLight ? 'text-black' : 'text-white'} transition-colors duration-500 ${
                        inView ? 'animate-fade-right' : 'opacity-0'
                    }`}
                >
                    With expertise in React, Next.js, Tailwind CSS, and modern web design principles, I specialize in building responsive and dynamic interfaces that prioritize both functionality and aesthetics. I love turning complex ideas into seamless digital solutions that not only meet but exceed user expectations.
                </p>
                <p
                    className={`text-sm mb-4 ${isLight ? 'text-black' : 'text-white'} transition-colors duration-500 ${
                        inView ? 'animate-fade-right' : 'opacity-0'
                    }`}
                >
                    I’m a Bachelor of Science in Computer Science at STI College Caloocan, where I’m honing my skills in software development, problem-solving, and innovative thinking. Outside of my academic and freelance projects, I’m constantly exploring new tools and techniques to stay ahead in the ever-evolving tech landscape.
                </p>
                <p
                    className={`text-sm mb-4 ${isLight ? 'text-black' : 'text-white'} transition-colors duration-500 ${
                        inView ? 'animate-fade-right' : 'opacity-0'
                    }`}
                >
                    My journey in web development is fueled by curiosity and a drive to create. Whether it’s designing a sleek portfolio site or developing a cutting-edge web application, I strive to deliver solutions that resonate with users and align with business goals.
                </p>
                <p
                    className={`text-sm mb-4 ${isLight ? 'text-black' : 'text-white'} transition-colors duration-500 ${
                        inView ? 'animate-fade-right' : 'opacity-0'
                    }`}
                >
                    When I’m not coding, you can find me exploring the latest UI/UX trends, tinkering with new frameworks, or diving into personal projects that challenge me to grow as a developer.
                </p>
                <p
                    className={`text-sm mb-4 ${isLight ? 'text-black' : 'text-white'} transition-colors duration-500 ${
                        inView ? 'animate-fade-right' : 'opacity-0'
                    }`}
                >
                    Feel free to reach out if you’d like to collaborate on a project, discuss web development trends, or simply say hi!
                </p>
            </div>
        </section>
    );
};

export default About;
