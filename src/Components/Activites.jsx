import React from "react";

const Activites = () => {
    return (
        <div className=" max-w-[1140px] m-auto w-full md:flex mt-[-75px] ">
            <div className="relative p-4">
                <h3 className="absolute z-10 top-[50%] left-[35%] translate-x-[-5%] translate-y-[-25%] text-2xl text-white font-bold">Resorts</h3>
                <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ2MDI3NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" 
                alt="/" 
                className="w-[50vh] h-[50vh] object-cover relative border-4 border-white shadow " />
            </div>
            <div className="relative p-4">
                <h3 className="absolute z-10 top-[50%] left-[35%] translate-x-[-5%] translate-y-[-25%] text-2xl text-white font-bold">Cruises</h3>
                <img src="https://images.unsplash.com/photo-1589420241438-38271f7d3cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTA3MTM1NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" 
                alt="/" 
                className="w-[50vh] h-[50vh] object-cover relative border-4 border-white shadow "/>
            </div>
            <div className="relative p-4">
                <h3 className="absolute z-10 top-[50%] left-[35%] translate-x-[-5%] translate-y-[-25%] text-2xl text-white font-bold">excursions</h3>
                <img src="https://images.unsplash.com/photo-1588272947905-24bec36c176d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NjM4Nzc1MQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" 
                alt="/" 
                className="w-[50vh] h-[50vh] object-cover relative border-4 border-white shadow "/>
            </div>
        </div> 
    )
}
export default Activites;