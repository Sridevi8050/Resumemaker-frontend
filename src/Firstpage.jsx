
import React from "react";
import { Link } from 'react-router-dom';

function Firstpage() {
    return (
        <div>
            <div className="min-h-screen space-y-12 flex flex-col items-center justify-center px-4">
                <div className="text-2xl font-bold text-center">
                    <h1>Welcome to Resume Builder</h1>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-7 space-y-6 md:space-y-0 items-center">
                    {/* Build from Scratch Card */}
                    <div className="w-full md:w-[400px] h-[auto] md:h-[200px] rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.3)] flex flex-col p-6 md:p-8 justify-center space-y-2 bg-white">
                        <h1 className="font-bold text-lg">Build from Scratch</h1>
                        <p className="text-sm">Create a personalized resume from the ground up. Choose a template and enter your details to generate a professional resume.</p>
                        <Link to="/templates" className="bg-blue-800 text-white rounded-md px-6 py-2 w-fit sm:w-[350px] sm:pl-32">Get Started</Link>
                    </div>

                    {/* Upload Resume Card */}
                    <div className="w-full md:w-[400px] h-[auto] md:h-[200px] rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.3)] flex flex-col p-6 md:p-8 justify-center space-y-2 bg-white">
                        <h1 className="font-bold text-lg">Upload Existing Resume</h1>
                        <p className="text-sm">Upload your current resume to edit or enhance it with our tools. (Coming soon!)</p>
                        <button className="bg-gray-500 text-white rounded-md px-6 py-2 w-fit sm:w-[350px] cursor-not-allowed sm:pl-10">Coming Soon</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Firstpage;
