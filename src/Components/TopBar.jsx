import React from "react";
import {AiFillPhone, AiOutlineClockCircle  } from "react-icons/ai";
import {BsChatSquareDots} from "react-icons/bs"


const TopBar = () => {
    return(
        <div className="flex justify-between items-center py-4 px-2">
            <div className="flex items-center ">
            <BsChatSquareDots size={30} className="text-[var(--primary-dark)] mr-2"/>
            <h1>TOURIST CENTER</h1>
            </div>
            <div className="flex items-center">
            <div className="hidden md:flex item-center px-6">
                <AiOutlineClockCircle size={20} className="text-[var(--primary-dark)] mr-2"/>
                <p className="text-sm text-gray-700">9:00 am - 10:00 pm</p>
            </div>
            <div className="hidden md:flex item-center px-6">
            <AiFillPhone size={20} className="text-[var(--primary-dark)] mr-2"/>
            <p className="text-sm text-gray-700">+234 7044929248</p>
            </div>
            <button>
                    Get a free Quote
                </button>
           </div>
        </div>
    ) 
};

export default TopBar; 