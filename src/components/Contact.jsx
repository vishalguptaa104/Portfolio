import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();

    const [username, setUsername] = useState('');
    const [emaill, setEmaill] = useState('');
    const [mess, setMess] = useState('');

    const showToastMessage = () => {

        toast.success("Message sent! I'll reply you soon", {
            position: toast.POSITION.TOP_RIGHT
        });
    };


    const sendEmail = (e) => {
        e.preventDefault();
        // alert("Message Sent. I'll reply you soon");
        // toast("Wow so easy!");
        // toast.success('Success Notification !', {
        //     position: toast.POSITION.TOP_RIGHT
        // });

        // 👇️ clear all input values in the form
        setUsername('');
        setEmaill('');
        setMess('');

        emailjs.sendForm('service_q7kf6x7', 'template_icsk5ih', form.current, 'EK7Bs4dMO2No7oUQJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div
            name="contact"
            className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Contact
                    </p>
                    <p className="py-6">Submit the form below to get in touch with me</p>
                </div>

                <div className=" flex justify-center items-center">
                    <form
                        ref={form} onSubmit={sendEmail}
                        className=" flex flex-col w-full md:w-1/2"
                    >
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Enter your name"
                            onChange={event => setUsername(event.target.value)}
                            value={username}
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type="text"
                            name="user_email"
                            onChange={event => setEmaill(event.target.value)}
                            value={emaill}
                            placeholder="Enter your email"
                            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <textarea
                            name="message"
                            onChange={event => setMess(event.target.value)}
                            value={mess}
                            placeholder="Enter your message"
                            rows="10"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        ></textarea>

                        <button value="Send" onClick={showToastMessage} className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                            Let's talk
                        </button>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;