import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import "../components/styles.css"
// import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="ups max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 sm:flex-row">
                <div className="flex flex-col justify-center h-full heading">
                    <h2 className="lft w-100 text-4xl sm:text-7xl font-bold text-white ">
                        Hi! I am a
                        <Typewriter
                            options={{
                                strings: ['Software Engineer', 'Frontend Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    {/* {<p className="text-gray-500 py-4 max-w-md">
                        I have 6 months of experience as a Software Engineer.
                        Currently, I love to work on web application using technologies like
                        React, Tailwind, JavaScript.
                    </p>} */}

                    <div className="links">
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Connect
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                        <a
                            href="/Vishal_CV.pdf"
                            smooth={true}
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                            download={"/Vishal_CV.pdf"}
                        >
                            Resume
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </a>
                    </div>
                </div>

                <div>
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className="rounded-t-md h-84 md:h-96 mx-auto w-2/3 md:w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;