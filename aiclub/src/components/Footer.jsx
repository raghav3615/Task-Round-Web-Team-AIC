import React from "react";


const Footer = () => {
    return (
        <div className="mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white bg-black">
            <div>
                <p className="py-4 text-lg">Join us on this exhilarating journey into the world of AI. Whether you're a novice eager to explore or a seasoned AI enthusiast, the AI Club at VIT Bhopal University is your platform for learning, creating, and shaping the future. Together, we'll unlock the potential of AI and contribute to a brighter, more inclusive, and ethically sound tomorrow.</p>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-between mt-6 mr-6">
                <div>
                    <h6 className="font-bold text-4xl text-white">Contact</h6>
                    <ul>
                        <li className="py-2 text-lg">Email Id- aiclub@vitbhopal.ac.in</li>
                        <li className="py-2 text-lg"><a href="https://aivitb.com/">Main Website</a></li>
                        <li className="py-2 text-lg"><a href="https://www.instagram.com/aiclub.vitb/?hl=en">Instagram</a></li>
                        <li className="py-2 text-lg"><a href="https://github.com/aiclubvitbhopal">Github</a></li>
                        <li className="py-2 text-lg"><a href="https://www.linkedin.com/company/aiclub-vitb/">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
