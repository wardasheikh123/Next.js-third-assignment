import React from "react";
import Image from "next/image";
const  about = () => {
    return (
        <div>
        <div className="bg-[url('/images/istock-814684194-coffee-x.jpg')] h(400px) bg-no-repeat w-full-bg-cover">
        </div>
    <nav className="bg-orange-950 text-white">
        <ul className="px-24 py-4 flex space-x-10 justify-end bg-brown-500 text-amber-800">
            <li className="curser pointer">Home</li>
            <li className="curser pointer">About</li>
            <li className="curser pointer">Menu</li>
            <li className="curser pointer">Events</li>
            <li className="curser pointer">Buy now</li>
        </ul>
     </nav> 
    </div>
    )
}
export default about;