import React from "react";
import "../components/styles.css"
import Blogg from "../assets/Blogg.png";
import BudgetBuddy from "../assets/Budget.png";
// import todo from "../assets/Todo.png";


const Projects = () => {
    const techs = [
        {
            id: 1,
            src: Blogg,
            title: "WordFlow",
            url: "https://github.com/vishalguptaa104/Blogg",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: BudgetBuddy,
            title: "Budget-Buddy",
            url: "https://github.com/vishalguptaa104/Budget-Buddy",
            style: "shadow-red-500",
        },
        // {
        //     id: 3,
        //     src: "https://cdn.pixabay.com/photo/2014/03/25/16/28/todo-list-297195_1280.png",
        //     title: "Todo List",
        //     url: "https://whowillpay.netlify.app/",
        //     style: "shadow-green-500",
        // },
    ];

    return (
        <div
            name="experience"
            className="bg-gradient-to-b from-gray-800 to-black w-full h-screen exp"
        >
            <div className="max-w-screen-lg  mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Projects
                    </p>
                    <p className="py-6">Here are few projects I've worked on recently</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-8 text-center py-10 px-12 sm:px-0">
                    {techs.map(({ id, src, title, url, style }) => (

                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 hover:cursor-pointer duration-500 py-2 rounded-lg ${style}`}
                            onClick={() => window.open(url, '_blank')}

                        >
                            <img src={src} alt="" className="w-40 h-5/6 mx-auto rounded-lg" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Projects;