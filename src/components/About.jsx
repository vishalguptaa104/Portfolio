import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20 ">
                    Hi I am Vishal Gupta, a Web developer, Software Engineer living in Uttar Pradesh, India. I am a Computer Science Engineer, currently working with awesome folks at <a href="https://www.ltimindtree.com/">LTIMindtree</a>.
                </p>

                <br />

                <p className="text-xl">
                    I have 6 months of experience as a Software Engineer.I am interested to work on web application as Frontend Developer. My tech skills include Html, CSS, Javascript, ReactJs, Git, Java, Python, Cpp, DSA checkout my Resume for more.
                </p>
            </div>
        </div>
    );
};

export default About;