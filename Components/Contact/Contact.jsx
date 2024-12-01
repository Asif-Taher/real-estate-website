'use client';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "94376e86-ae2c-46d6-8c9e-62e2433146bf");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("");
                toast.success("Success Notification!");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult("An error occurred. Try again.");
                toast.error("Failed to Submit!");
            }
        } catch (error) {
            console.error("Network Error:", error);
            setResult("Network Error!");
            toast.error("Network Error. Please try again.");
        }
    };

    return (
        <motion.div 
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="items-center container p-4 md:px-20 lg:px-32 w-full overflow-hidden" id="Contact">
            <h2 className="text-2xl text-center sm:text-4xl font-bold mb-2">
                Contact <span className="underline underline-offset-4 decoration-1 font-light">With Us</span>
            </h2>
            <p className="text-gray-500 max-w-80 text-center mx-auto mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolor quae commodi! Dolor, dignissimos fugit! Unde ut cumque tempore id.
            </p>
            {/* form part */}
            <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 text-left">
                        Your Name
                        <input
                            type="text"
                            name="Name"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-left md:pl-4">
                        Your Email
                        <input
                            type="email"
                            name="Email"
                            placeholder="Your Email"
                            className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                            required
                        />
                    </div>
                </div>
                <div className="my-6 text-left">
                    Message
                    <textarea
                        className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
                        name="Message"
                        placeholder="Message"
                        required
                    ></textarea>
                </div>
                <div className="text-center">
                    <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded-sm">
                        {result ? result : "Send Message"}
                    </button>
                </div>
            </form>
            <ToastContainer />
        </motion.div>
    );
}
