import React from "react";
import Typed from "react-typed";
import logo from "../assets/bhopal.png";

const Hero = () => {
    return (
        <div className="text-black">
            <div className="max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-red-600 font-bold p-2 text-3xl">VIT Bhopal University</p>
                <p className="text-2xl font-semibold">AI CLUB</p>
                <p className="text-2xl font-semibold">Unleashing AI</p>
                
                <h1 className="md:text-7xl sm:text-6xl md:px-2 text-3xl font-bold md:py-6">Join the AI Revolution</h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold">
                        Discover AI's Infinite Possibilities with <Typed className="md:text-5xl sm:text-4xl md:pl-4 text-xl font-bold" strings={["Us!", "VIT!"]} typespeed={100} backSpeed={100} loop />
                    </p>
                </div>
                <div className="justify-center flex flex-row mt-10">
                    <img src={logo} alt="college logo" height={200} width={200} />
                </div>
            </div>
        </div>
    );
};

export default Hero;
