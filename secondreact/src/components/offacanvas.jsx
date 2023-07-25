import "../app.css";
import { useState } from 'preact/hooks'
export  function Temps()
{
    const[close ,SetClose]=useState(false)
    if(close)
    {
        return(
         <div className="col-span-5">
            
            <div className="h-screen  m-5 shadow-2xl rounded-2xl sidebar outline-dotted transition-all delay-1000 ease-in float-left">
            <button className=" m-2 bg-blue-500 text-white p-3 rounded-md w-16 ms-32 transition-all delay-1000 ease-in float-left btn1" onClick={()=>SetClose(false)} >Close</button>
            <header className="text-center text-3xl mb-5" >
                Menu
            </header>
            <hr className="mt-3"></hr>
            <ul >
                <li className="p-5 text-xl mx-4">Home</li>
                <hr></hr>
                <li className="p-5 text-xl mx-4">Account</li>
                <hr></hr>
                <li className="p-5 text-xl mx-4">Create</li>
                <hr></hr>
                <li className="p-5 text-xl mx-4">Log Out</li>
                <hr></hr>
                <li className="p-5 text-xl mx-4">Exit</li>
            </ul>
  
        </div>
         </div>
        )
    }
    return(
        <>
        <button className=" mx-2 my-3  bg-red-500 text-white p-3 rounded-md w-16" onClick={()=>SetClose(true)}>Open</button>
         
        </>
    )
}