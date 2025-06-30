import React from 'react'
import TopLeftHeader from '../top-left-header'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'


const process = [
    {
        step: "Discovery",
        description: "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
        see: "/"
    },
    {
        step: "Strategy",
        description: "Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success.",
        see: "/"
    },
    {
        step: "Design",
        description: "We start every new client interaction wiAfter we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
        see: "/"
    },
    {
        step: "Build",
        description: "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
        see: "/"
    }
]

const WorkProcessSection = () => {
    return (
        <section className='p-16  bg-neutral-900 text-white rounded-[40px] space-y-8 container mx-auto mb-10'>
            <div className=" relative  gap-8">
                <div className="xl:absolute top-4 left-0 flex items-center justify-center">
                    <TopLeftHeader label='Work Process' />
                </div>
                <h2 className="flex-1 text-center text-6xl font-bold leading-[86px]">My Work Process</h2>
            </div>


            {/*  */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-24">
                {process.map((item, ind) => (
                    <Card key={ind} className="w-full bg-black rounded-[30px] 
                   border-none hover:rotate-6 hover:bg-lime-300 hover:text-black transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl  py-7 flex flex-col justify-between items-start
                   hover:cursor-pointer hover:transition-all
                    group
                    ">
                        <CardHeader className="flex justify-between items-center w-full">
                            <Badge className=' text-lg text-black bg-teal-100 
                            group-hover:bg-neutral-900 group-hover:text-white
                            rounded-full px-4 font-medium'>{item.step}</Badge>
                            <Link href={'/'} className='flex items-center text-white text-lg font-semibold group-hover:text-black transition-colors duration-300'>
                               
                                <ArrowRightIcon className='mr-3' />
                                <span className='cursor-pointer hover:underline'>Read More</span>
                            </Link>
                        </CardHeader>
                        <CardContent>
                            <p className='justify-start text-white/80 text-lg font-normal  leading-loose
                            group-hover:text-black transition-colors duration-300'>
                                {item.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}


            </div>
        </section>
    )
}

export default WorkProcessSection
