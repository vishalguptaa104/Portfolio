import React from "react";
import "../components/styles.css"

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white about"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20 aboutp tp">
                    Hi, My name is Vishal Gupta and I am a Software Engineer currently residing in Pune, India. With a Bachelor's degree in Computer Science Engineering, I have gained invaluable knowledge and expertise in the field of software development.
                </p>

                <br />

                <p className="text-xl aboutp">
                    I have had the privilege of working with some exceptional professionals at <b>LTIMindtree</b>. As a Frontend Developer, I am particularly drawn to web applications and I am eager to put my skills to use in this area. My technical proficiencies include expertise in Html, CSS, Javascript, ReactJs, Git, Python, and C++. I am also proficient in Data Structures and Algorithms, which enables me to develop efficient and robust solutions.
                    <br></br>
                    <br />

                    If you are looking to hire, Kindly refer to my resume for more details on my education, skills, and accomplishments. I am excited about the opportunity to work with your organization and contribute to its growth and success.
                </p>
            </div>
        </div>
    );
};

export default About;