import React from "react";



const Contact = () => {
    return(
        <div  id="contact" className="max-w-[1140px] w-full m-auto p-4">
            <h2 className="text-center text-gray-700">Send us a message</h2>
            <p className="text-center text-gray-700 p-2">We're standing by!</p>
            <div className="grid md:grid-cols-2 ">
                <img src="https://plus.unsplash.com/premium_photo-1682913629540-3857602b540c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTA3MTE5NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" 
                      alt="/" 
                      className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"/>

                    <form>
                        <div className="grid grid-cols-2">
                            <input className="border m-2 p-2" type="text" placeholder="First"/>
                            <input className="border m-2 p-2" type="text" placeholder="Last"/>
                            <input className="border m-2 p-2" type="email" placeholder="Email"/>
                            <input className="border m-2 p-2" type="tel" placeholder="phone"/>
                            <input className="border m-2 p-2 col-span-2" type="text" placeholder="Address"/>
                            <textarea className="border col-span-2 m-2 p-2" placeholder="Add Note..." cols="30" rows="10"></textarea>
                            <button className=" m-2 py-2 col-span-2 rounded-md ">Submit</button>
                        </div>
                    </form>
            </div>

        </div>
    )
}

export default Contact;