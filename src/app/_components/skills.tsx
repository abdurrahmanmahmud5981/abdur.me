import React from 'react'
import TopLeftHeader from './top-left-header'
import {  ArrowLeft, ArrowRight } from 'lucide-react'


const skills = [
    {
        icon: "Icon will be here",
        title: "HTML & CSS",
        description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis"
    },
    {
        icon: "Icon will be here",
        title: "Javascript",
        description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis"
    },
    {
        icon: "Icon will be here",
        title: "Webflow",
        description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis"
    }
]
const MySkills = () => {

    return (
        <section className='p-16 bg-black text-white rounded-[40px] space-y-8 container mx-auto mb-10'>
            <TopLeftHeader label='Why Choose me' />

            <div className="flex flex-col lg:flex-row justify-between lg:gap-36">
                <h2 className=" lg:max-w-xl justify-start  text-6xl font-bold leading-20 ">My Extensive List of Skills</h2>
                <p className=" lg:max-w-xl border-b-4 border-b-muted-foreground lg:text-right text-xl leading-loose">Building the worlds best marketing Your trusted partner for strategy, design, and dev.</p>
            </div>


            <div className="flex justify-end gap-6">
                <ArrowLeft size={44} className='ring-2 rounded-full p-2'/>
                <ArrowRight size={44} className='ring-2 rounded-full p-2'/>
            </div>
            {/*  */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-28">
                {skills.map((skill, ind) => (
                    <div key={ind} className=" w-full bg-white/10 rounded-[30px] p-9 hover:rotate-6 duration-300">
                        <div className="size-24 relative">
                            <div className="w-24 h-7 left-0 top-[34.50px] absolute rounded-full  outline-2 outline-offset-[-1px] outline-white"></div>
                            <div className="w-24 h-7 left-[11.26px] top-[84px] absolute origin-top-left rotate-[-60deg] rounded-full  outline-2 outline-offset-[-1px] outline-white"></div>
                            <div className="w-24 h-7 left-[37.24px] top-0 absolute origin-top-left rotate-[60deg] rounded-full  outline-2 outline-offset-[-1px] outline-white"></div>
                            <div className="size-3.5 left-[42px] top-[43px] absolute bg-lime-300 rounded-full"></div>
                        </div>
                        {/* <span>{skill.icon}</span> */}
                        <h3 className="justify-center  text-2xl font-bold  leading-loose" >{skill.title}</h3>
                        <p className=" opacity-70 justify-start text-base font-normal leading-relaxed">{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MySkills
