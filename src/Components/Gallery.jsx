import React from "react";


const Gallery =() => {
    return(
        <div id='gallery' className="max-w-[1140px] w-full  m-auto px-4 py-16">
            <h2 className="text-center text-gray-700">Gallery</h2>
            <div className="grid sm:grid-cols-5 gap-4">
                <div className="sm:col-span-3 col-span-2 row-span-2"> 
                    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1509233725247-49e657c54213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTUzODAxMQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="/" />
                </div>
                <div>
                    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1586611292717-f828b167408c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTU2MjA0Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="/" />
                </div>
                <div>
                    <img className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1680831271549-03b693d9d81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTA3MDUxMQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="/" />
                </div>
                <div>
                    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQwOTY5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="/" />
                </div>
                <div>
                    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560189236-71c235494695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTA3MDY1MQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="/" />
                </div>
            </div>
             
        </div>
    )
}

export default Gallery;