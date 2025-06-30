import { ArrowDown } from 'lucide-react'
import React from 'react'

const TopLeftHeader = ({ label }: { label: string }) => {
    return (
        <div className='flex items-center'>
            <span className=" border-2 rounded-full p-2.5">
                <ArrowDown size={20} />
            </span>
            <span className="border-2 rounded-full px-5 py-2.5">{label}</span>

        </div>
    )
}

export default TopLeftHeader
