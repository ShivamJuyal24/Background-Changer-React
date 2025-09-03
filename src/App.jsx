import { useState } from "react"
function App() {

  const  [color , setColor]= useState("olive")

  return (
    <div className="w-full h-screen duration-200"
          style={{backgroundColor:color}}
>
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button
      onClick={()=> setColor("red")} className="px-5 py-2 rounded-full text-white font-semibold shadow-md hover:opacity-90 hover:scale-105 transform transition-all duration-200"
    style={{backgroundColor:"red"}}
    >Red</button>
      <button onClick={()=> setColor("green")} className="px-5 py-2 rounded-full text-white font-semibold shadow-md hover:opacity-90 hover:scale-105 transform transition-all duration-200"
    style={{backgroundColor:"green"}}
    >Green</button>
      <button onClick={()=> setColor("blue")} className="px-5 py-2 rounded-full text-white font-semibold shadow-md hover:opacity-90 hover:scale-105 transform transition-all duration-200"
    style={{backgroundColor:"blue"}}
    >Blue</button>
      <button onClick={()=> setColor("pink")} className="px-5 py-2 rounded-full text-white font-semibold shadow-md hover:opacity-90 hover:scale-105 transform transition-all duration-200"
    style={{backgroundColor:"pink"}}
    >Pink</button>
      <button onClick={()=> setColor("black")}   className="px-5 py-2 rounded-full text-white font-semibold shadow-md hover:opacity-90 hover:scale-105 transform transition-all duration-200"
    style={{backgroundColor:"black"}}
    >Black</button>

    </div>
    
    </div>
</div>
  )
}

export default App
