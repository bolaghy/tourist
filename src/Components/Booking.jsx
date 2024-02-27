import React from "react";

const Booking =() => {
    return(
        <div id="deals" className="max-w-[1140px] w-full m-auto p-4"> 
        <form className=" lg:flex lg:justify-between w-full items-center">
            <div className="flex flex-col my-2 py-2">
            <label>Destination</label>
            <select className=" lg:w-[300px] md:w-full border rounded-md p-2">
                <option>Hong kong</option>
                <option>Ibiza</option>
                <option>Anfield</option>
                <option>Arena 02</option>
            </select>
            </div>
            <div className="flex w-full">
                <div className="flex flex-col w-full lg:w-[250px] my-2 py-2">
                    <label>Check-In </label>
                    <input className="border rounded-md p-2" type="date" />
                </div>
                <div className="flex flex-col w-full lg:w-[250px] my-2 py-2">
                    <label>Check-Out </label>
                    <input className="border rounded-md p-2" type="date" />
                </div>
            </div>
            <div className="flex flex-col w-full my-2 py-2">
                <label>Search</label>
                <button className="w-full p-2">Rates & Avalabilities</button>
            </div>
        </form>

        </div>
    )
}

export default Booking;