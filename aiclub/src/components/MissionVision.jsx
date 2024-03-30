import React from "react";
import { data } from "../data.js";

const Offer = () => {
    return (
        <div>
            <div className="w-full bg-black py-16 px-4">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                    <div>
                        <h1 className="font-bold md:text-6xl sm:text-4xl text-3xl py-10 px-20  text-white flex item-center justify-center">Our Mission</h1>
                        <div className="text-white flex flex-col justify-center">
                            {data.mission.map((item) => (
                                <p className="py-3 px-5 md:text-2xl text-xl">{item}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold md:text-6xl sm:text-4xl text-3xl py-10 px-20  text-white flex item-center justify-center">Our Vision</h1>
                        <div className="text-white flex flex-col justify-center">
                            {data.vision.map((item) => (
                                <p className="py-3 px-5 md:text-2xl text-xl">{item}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;
