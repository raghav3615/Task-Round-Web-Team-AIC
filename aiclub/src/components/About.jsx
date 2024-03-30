import React from "react";
import { data } from "../data.js";
import brain from "../assets/brain.jpg";

function About() {
    return (
        <div id="about">
            {/**<div className="text-center p-8 my-5">
            <div className="">
                <h1 className="font-bold text-2xl text-white-800">About</h1>
            </div>
            <div className="lg:pr-8 pb-6 text-black">{data.about}</div>
        </div> */}
            <div className="w-full bg-black py-16 px-4">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                    <img className="w-[500px] mx-auto my-4" src={brain} alt="laptop" />
                    <div className="text-white flex flex-col justify-center">
                        <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl py-2">About</h1>
                        <p className="">{data.about}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
