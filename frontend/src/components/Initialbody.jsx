import React from 'react'


const Initialbody = () => {
    return (
        <div className="mockup-window border w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
            <div className="flex flex-col justify-center items-center px-4 py-10 space-y-4 w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-600">
                <h1 className="text-2xl font-bold font-serif">Welcome to Let's-Chat!</h1>
                <p className="text-lg">Experience seamless and secure communication with Lets-chat, your go-to app for real-time messaging.</p>
                <p className="text-lg">Built with the MERN stack, Socket.io, TailwindCSS, and Daisy UI for a robust and attractive interface.</p>
                <p className="text-lg">Enjoy the peace of mind with JWT-based authentication and authorization, ensuring your data remains secure.</p>
                <p className="text-lg">Engage in real-time conversations thanks to the reliable and fast Socket.io integration.</p>
                <p className="text-lg">Stay updated with the online status of your contacts through the efficient use of Socket.io and React Context.</p>
                <p className="text-lg">Benefit from smooth and efficient global state management provided by Zustand.</p>
                <p className="text-lg">Our app is designed with comprehensive error handling, both server-side and client-side, to ensure a seamless user experience.</p>
                <h3 className='text-xl font-semibold underline'>"Join the conversation on Let's-Chat! Log in or sign up now to connect and chat in real-time with ease."</h3>
            </div>
        </div>
    )
}

export default Initialbody