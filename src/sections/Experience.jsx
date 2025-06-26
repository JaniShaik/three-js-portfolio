import React from 'react'
import {Canvas} from "@react-three/fiber";
import {workExperiences} from "../constants/index.js";

const Experience = () => {
    return (
        <section className="c-space my-20" id="work">
            <div className="w-full text-white-600 space-y-5">
                <p className="head-text">My Work Experience</p>

                <div className="w-full rounded-lg bg-black-200 border border-black-300">
                    <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                        {workExperiences.map((
                            {
                                id, name, pos, icon, duration, title, animation}) =>
                            (<div key={id} className="work-content_container group">
                                <div className="flex flex-col h-full justify-start items-center py-2">
                                    <div className="work-content_logo">
                                        <img src={icon} alt="icon" className="w-full h-full" />
                                    </div>
                                    <div className="work-content_bar"/>
                                </div>

                                <div className="sm:p-5 px-2.5 py-5">
                                    <p className="font-bold text-white-800">{name}</p>
                                    <p className="text-sm mb-5">{pos}</p>
                                    <p className="group-hover:text-white transition ease-in-out duration-500">{title}</p>
                                </div>

                            </div>))
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Experience
