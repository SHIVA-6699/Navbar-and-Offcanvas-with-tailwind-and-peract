import { useState } from "preact/hooks"
import { Temps } from "../components/offacanvas"
export  function Rep()
{
    var a=1
    function show()
    {
        var ele=document.querySelector("nav")
      if(a==1)
    
      {
          ele.classList.remove("hidden")
          a--
      }
      else
      
      {
        ele.classList.add("hidden")
       
     a++
      }
    } 

    
    return(
        <>
        <button  className="block ms-auto mx-5  text-9xl  md:hidden relative top-7" onClick={()=>show()}><svg  className="" xmlns="http://www.w3.org/2000/svg" width="30" height="36" fill="currentColor" class="bi bi-hdd-stack-fill" viewBox="0 0 16 16">
  <path d="M2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"/>
</svg></button>
    <nav className=" lg:me-10 hidden md:block">
        <ul className="float-right flex flex-wrap xs:max-md:absolute xs:max-md:top-36 md:gap-10 xs:items-center ">
            <li className="p-3 bg-blue-500 xs:m-0.5 xs:rounded-md lg:rounded-lg md:mt-2 w-24 xs:max-md:w-full text-center text-white">Text</li>
            <li className="p-3 bg-blue-500 xs:m-0.5 xs:rounded-md lg:rounded-lg md:mt-2 w-24 text-center text-white xs:max-md:w-screen">shiva</li>
            <li className="p-3 bg-blue-500 xs:m-0.5 xs:rounded-md lg:rounded-lg md:mt-2 w-24 text-center text-white xs:max-md:w-full">Log Out</li>
            <li className="p-3 bg-blue-500 xs:m-0.5 xs:rounded-md lg:rounded-lg md:mt-2 w-24 text-center text-white xs:max-md:w-full">shiva</li>
            <li className="p-3 bg-blue-500 xs:m-0.5 xs:rounded-md lg:rounded-lg md:mt-2 w-24 text-center text-white xs:max-md:w-full">PageNo</li>
        </ul>
    </nav>
     <Temps></Temps>
    </>
   )
}
