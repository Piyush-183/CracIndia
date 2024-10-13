import React from 'react'

const Feedback = () => {
  return (
    <div>
        <div className="services w-full mx-auto">
            <div className='flex justify-center py-10 md:text-5xl text-4xl font-bold w-full'>
                <h1>Services Registered</h1>
            </div>
            <div className="cards w-[80%] text-2xl text-white font-bold md:h-56 grid gap-9 md:grid-cols-3 grid-cols-1 justify-center items-center mx-20 md:mx-48">
                <div className="card1 text-center px-20 py-10 w-80 md:h-48 rounded-3xl shadow-2xl hover:scale-110 duration-500 cursor-pointer bg-amber-400">
                    <h1>Contractor Registered</h1>
                    <h1>3848+</h1>
                </div>
                <div className="card2 text-center px-20 py-10 w-80 md:h-48 rounded-3xl shadow-2xl hover:scale-110 duration-500 cursor-pointer bg-amber-400">
                    <h1>Supplier Registered</h1>
                    <h1>6798+</h1>
                </div>
                <div className="card3 text-center py-10 px-10 w-80 md:h-48 rounded-3xl shadow-2xl hover:scale-110 duration-500 cursor-pointer bg-amber-400">
                    <h1>Manufacturer Registered</h1>
                    <h1>55+</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feedback
