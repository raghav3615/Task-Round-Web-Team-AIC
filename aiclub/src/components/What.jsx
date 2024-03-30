import React from "react";
import whatisai from "../assets/whatisai.png";

const What = () => {
    return (
        <div className="w-full py-16 text-black">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2">
                <div className="py-40">
                    <h1 className="md:text-6xl sm:text-5xl text-2xl font-bold">What is AI?</h1>
                    <p className="py-6">Artificial Intelligence (AI) is a field of computer science that focuses on the creation of intelligent machines that work and react like humans. </p>
                    <p>The true challenge to AI is proved to be doing tasks that are easy for human to perform but difficult for human to describe in a formal way such as recognizing speech or faces in an image.</p>
                </div>
                <img src={whatisai} alt="venn diagram" />
            </div>
        </div>
    );
};

export default What;
