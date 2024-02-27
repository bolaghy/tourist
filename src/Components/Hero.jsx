import React from "react";


const Hero = () => {
    return (
        <div className="w-full h-[90vh]">
            <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTM0MTg4OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                alt="/"
                className="w-full h-full object-cover" />
            <div className="max-w-[1140px] m-auto">
                <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-blue-700 p-4">
                    <h1 className="font-bold text-4xl ">Find Your Special Trip</h1>
                    <h2 className=" text-4xl italic py-4" >With Tourist Center</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aut fugiat eaque!
                        Nulla voluptatibus libero amet temporibus illum. In nisi, iste harum accusantium,
                        dicta aut commodi molestias minima et tempora assumenda reprehenderit incidunt eius enim quo
                        quisquam saepe reiciendis. A quibusdam libero vel iusto consequuntur qui molestias laborum facere pariatur!
                    </p>
                </div>


            </div>
        </div>

    )
}

export default Hero;